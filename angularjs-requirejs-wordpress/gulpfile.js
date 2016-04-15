var gulp = require("gulp");
var concat = require("gulp-concat");
var less = require('gulp-less');
var zip = require("gulp-zip");
var rename = require("gulp-rename");
var clean = require("gulp-clean");
var watch = require("gulp-watch");
var batch = require("gulp-batch");
var runSequence = require("run-sequence");
var amdOptimize = require("amd-optimize");

var assets = "assets/";
var paths = {
    scriptsDir: assets + 'js/',
    scripts: assets + "js/**/*js",
    style: assets + "less/app.less",
    styles: assets + "less/**/*.less",
    tplDir: assets + "tpl/",
    tpls: assets + "tpl/**/*.html",
    build: {
        js: "build/js",
        css: "build/css",
        tpl: "build/tpl"
    }
};

gulp.task("build:js", function() {
    return gulp.src(paths.scripts)
        // Traces all modules and outputs them in the correct order.
        .pipe(amdOptimize("bootstrap", {
            name: "main",
            configFile: paths.scriptsDir + "main.js",
            baseUrl: paths.scriptsDir
        }))
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest(paths.build.js));
});

gulp.task("build:css", function() {
    return gulp.src(paths.style)
        .pipe(less())
        .pipe(gulp.dest(paths.build.css))
});

gulp.task("build:tpl", function() {
    return gulp.src(paths.tpls)
        .pipe(gulp.dest(paths.build.tpl));
});

gulp.task("clean", function() {
    return gulp.src("build/**/*")
        .pipe(clean());
});

gulp.task("watch", function() {
    watch(paths.scripts, batch(function(event, done) {
        gulp.start('build:js', done);
    }));

    watch(paths.styles, batch(function(event, done) {
        gulp.start('build:css', done);
    }));

    watch(paths.tpls, batch(function(event, done) {
        gulp.start('build:tpl', done);
    }));
});

gulp.task("zip", function() {
    return gulp.src([
            "build*/**/*",
            "inc*/**/*",
            "lib*/requirejs/**",
            "footer.php",
            "functions.php",
            "header.php",
            "index.php",
            "screenshot.png",
            "style.css"
        ])
        .pipe(zip("angularjs-requirejs-wordpress.zip"))
        .pipe(gulp.dest("./"));
});

gulp.task("default", ["clean"], function() {
    runSequence("build:js");
    runSequence("build:css");
    runSequence("build:tpl");
});