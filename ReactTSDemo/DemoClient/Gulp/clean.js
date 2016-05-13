'use strict';
//plugins
var gulp = require('gulp'),
    debug = require('gulp-debug'),
    gulpRimraf = require('gulp-rimraf'),
    rimraf = require('rimraf');

//custom modules
var paths = require('./paths');

// Clean Sub-Tasks
gulp.task('clean:map', function (cb) {
    return rimraf(paths.maps, cb);
});

gulp.task('clean:js', function (cb) {
    return rimraf(paths.concatJsDest, cb);
});

gulp.task('clean:css', function (cb) {
    return rimraf(paths.concatCssDest, cb);
});

gulp.task('clean:ts', function () {
    return gulp.src(paths.ts.dest+'**/*.{tsx,ts,js}')
    .pipe(debug({ title: 'pre-ts:' }))    
    .pipe(gulpRimraf());
});

gulp.task('clean', ['clean:map', 'clean:js', 'clean:css', 'clean:ts']);