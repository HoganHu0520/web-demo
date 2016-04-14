var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concat = require("gulp-concat");
var zip = require("gulp-zip");
var rename = require("gulp-rename");
var clean = require("gulp-clean");

var assets = "assets/";
var paths = {
    scriptsDir: assets + 'js/',
    scripts: assets + "js/**/*js",
    styles: assets + "css/**/*.css",
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
    return gulp.src(paths.styles)
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

gulp.task("default", ["clean", "build:js", "build:css", "build:tpl"], function() {

});
