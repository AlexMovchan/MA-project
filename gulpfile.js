var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

'use strict';
 
 
gulp.task('sass', function () {
  return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});
 
gulp.task('watch', ['webserver', 'sass'], function () {
  gulp.watch('app/**/*.scss', ['sass']);
});