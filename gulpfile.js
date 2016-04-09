"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util"); // Util
var plumber = require("gulp-plumber"); // Prevent stopping watch
var concat = require("gulp-concat"); //  concatinate files
var rename = require("gulp-rename"); // rename

var compass = require("gulp-compass"); // Sass compiler
var autoprefixer = require("gulp-autoprefixer"); // Add vendor prefix
var csscomb = require("gulp-csscomb"); // Format CSS
var minifyCss = require("gulp-clean-css"); // Minify CSS

var path = {
    root_dir: __dirname + "/src/assets/",
    css_dir: __dirname + "/src/",
    sass_dir: "scss/",
    sass: "scss/*.scss"
}

// Compile sass
gulp.task("compassDev", function() {
    gulp.src(path.root_dir + path.sass)
        .pipe(plumber())
        .pipe(compass({
            project: path.root_dir,
            sass: path.root_dir + path.sass_dir,
            css: path.css_dir
        }))
        .pipe(concat("style.css"))
        .pipe(gulp.dest(path.css_dir))
});

// Compile sass
gulp.task("compass", function() {
    gulp.src(path.root_dir + path.sass)
        .pipe(plumber())
        .pipe(compass({
            project: path.root_dir,
            sass: path.root_dir + path.sass_dir,
            css: path.css_dir
        }))
        .pipe(concat("style.css"))
        .pipe(autoprefixer("last 2 version", "ie 8", "ie 7"))
        .pipe(csscomb())
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(path.css_dir))
});

// Watch coffee and sass files
gulp.task("watch", function() {
    gulp.watch(path.root_dir + path.sass, ["compassDev"]);
});

gulp.task("default", ["compassDev", "watch"]);
