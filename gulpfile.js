'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');


gulp.task('templates', function() {
  gulp.src('./src/jade/*.jade')
    .pipe(jade({
      pretty: true,
      locals: {
        title: 'My website'
      }
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('templates:watch', ['templates'], function () {
  gulp.watch('./src/jade/**/*.jade', ['templates']);
});


gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch', 'templates:watch']);
