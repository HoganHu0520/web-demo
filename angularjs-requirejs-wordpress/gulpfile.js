var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');

gulp.task("default", function () {

  return gulp.src("js/**/*.js")
    // Traces all modules and outputs them in the correct order.
    .pipe(amdOptimize("bootstrap", {
        name: "main",
        configFile : "./js/main.js",
        baseUrl: './js'
    }))
    .pipe(concat("bootstrap.js"))
    .pipe(gulp.dest("dist"));

});
