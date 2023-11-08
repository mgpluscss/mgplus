import gulp from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import { deleteAsync } from "del";
import gulpRename from "gulp-rename";
import cleanCSS from "gulp-clean-css";
import browserSync from "browser-sync";  
 
const sass = gulpSass(nodeSass);

browserSync.create(); 
  
gulp.task("start", () => {
  browserSync.init({
    watch: true,
    logLevel: "debug",
    server: {
      baseDir: "./",
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
