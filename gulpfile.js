'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const del = require('del');
const babel = require('gulp-babel');

gulp.task('sass', function () {
    return gulp.src('./style/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/css'));
});

gulp.task('watch', function () {
    gulp.watch('./style/scss/*', ['sass']);
    gulp.watch('./js/main.js', ['build'])
});

gulp.task('clean', () => {
  return del('./dev');
});

gulp.task('build', ['clean'], () => {
  return gulp.src('./js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dev'));
});

gulp.task('default', ['build', 'watch', 'sass']);
