// Sass configuration
const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const gulpRename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

gulp.task("start", function () {
  browserSync.init({
    watch: true,
    logLevel: "debug",
    server: {
      baseDir: "./",
    },
    injectChanges: true,
  });
  gulp.watch(["src/**/*.scss"], gulp.series(["build"]), function (done) {
    browserSync.reload();
    done();
  });
});

gulp.task("sass", () => {
  return (
    gulp
      .src("src/mg-plus.scss")
      //.src("sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("dist/"))
  );
});

gulp.task("clean", () => {
  return del(["dist/*.css"]);
});

gulp.task("sass-compile", gulp.series(["clean", "sass"]));

gulp.task("minify", function (done) {
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

gulp.task("build", gulp.series(["sass-compile", "minify"]), function (done) {
  done();
});
