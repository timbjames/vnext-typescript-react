'use strict';

//3rd Party References
var gulp = require('gulp'),
    install = require('gulp-install');
    
//Internal References
var paths = require('./paths');

gulp.task('install', function() {
    return gulp.src(paths.packageFiles)
        .pipe(install());
});
