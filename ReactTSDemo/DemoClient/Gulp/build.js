'use strict';

// 3rd Party References

    var gulp = require('gulp'),
        batch = require('gulp-batch'),
        browserSync = require('browser-sync').create(),
        cache = require('gulp-cached'),
        debug = require('gulp-debug'),
        eventStream = require('event-stream'),
        sourcemaps = require('gulp-sourcemaps'),
        typescript = require('gulp-typescript'),
        watch = require('gulp-watch');

// Internal References

    var paths = require('./paths'),
        tsProject = require('./tsProject');

// Build Functions

    function build(partBuild) {

        var typescriptSource;

        if (partBuild) {
            tsProject.noExternalResolve = false;
            typescriptSource = getCachedTypescriptSource();
        } else {
            typescriptSource = getTypescriptSource();
        }

        return eventStream.merge(
            typescriptSource,
            getTypescriptDefinition()
        )
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(paths.ts.dest));
    }

    function getTypescriptSource() {

        return gulp.src(paths.ts.src)
            .pipe(debug({ title: 'typescript >' }));
    }

    function getCachedTypescriptSource() {

        return gulp.src(paths.ts.src)
            .pipe(cache('build:ts'))
            .pipe(debug({ title: 'typescript >' }));
    }

    function getTypescriptDefinition() {
    
        return gulp.src(paths.ts.typings);
    }

// Public Tasks

    gulp.task('build', function () {

        return build();

    });

    gulp.task('good-watch', ['build'], function () {

        watch(paths.ts.src, batch(function (events, done) {
            gulp.start('build', done);
        }));

    });

    gulp.task('poor-watch', ['build'], function () {

        watch(paths.ts.src, batch(function (events, done) {
            return build(/*partBuild: */true);
        }));

    });

    gulp.task('browsersync', ['poor-watch'], function () {

        browserSync.init({
            files: [paths.js],
            proxy: paths.urls.siteHttp,
            reloadDebounce: 2000,
            reloadDelay: 500
        });
    });

//TODOxGR: Add Site Launch Before Sync
//Currently only launches proxy site.
