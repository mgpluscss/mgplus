import gulp from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import { deleteAsync } from "del";
import gulpRename from "gulp-rename";
import cleanCSS from "gulp-clean-css";
import browserSync from "browser-sync";  
import minify from "gulp-minify";
import  babel from "gulp-babel";
const sass = gulpSass(nodeSass);

browserSync.create(); 

gulp.task('build-js', () =>
	gulp.src('src/plugins/*.js')
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(gulp.dest('dist'))
    .pipe(gulp.dest('demo-page/plugins'))
);

gulp.task("minify-js", (done) => {
  gulp
    .src("src/plugins/*.js")
    .pipe(
      minify({
        ext: {
          src: ".js",
          min: ".min.js",
        },
        exclude: [],
        ignoreFiles: [],
      })
    )
    .pipe(gulp.dest("dist/"));
  done();
});

gulp.task("start", () => {
  browserSync.init({
    watch: true,
    logLevel: "debug",
    server: {
      baseDir: "./demo-page",
    },
    injectChanges: true,
  });
  gulp.watch(["src/**/*.scss"], gulp.series(["build"]), (done) => {
    browserSync.reload();
    done();
  });
});

gulp.task("sass", () => {
  return gulp
    .src("src/mg-plus.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/"));
});

gulp.task("clean", () => {
  return deleteAsync(["dist/*.css"]);
});

gulp.task("sass-compile", gulp.series(["clean", "sass"]));

gulp.task("minify-css", (done) => {
  gulp
    .src("dist/mg-plus.css")
    .pipe(gulp.dest("demo-app")) 
    .pipe(
      cleanCSS(
        {
          debug: true,
          compatibility: "ie9,-properties.merging", // sets compatibility to IE9 mode with disabled property merging
        },
        (details) => {
          console.log(`${details.name}: ${details.stats.originalSize}`);
          console.log(`minified: ${details.stats.minifiedSize}`);
        }
      )
    )
    .pipe(gulpRename("mg-plus.min.css"))
    .pipe(gulp.dest("dist"))  
    .pipe(browserSync.stream());
  done();
});

gulp.task(
  "build",
  gulp.series(["sass-compile", "minify-css"]),
  (done) => {
    done();
  }
);
