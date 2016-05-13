'use strict';

//3rd Party References
var gulp = require('gulp'),
    argv = require('yargs').argv,
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    jspm = require('gulp-jspm-build'),
    objectAssign = require('object-assign'),
    uglify = require('gulp-uglify');

//Internal References
var paths = require('./paths');

var environment = argv.env || 'development';

var documentBundle = {
    //these are the default settings
    name:'Document pack create',//this is just an arbitary name
    main: 'js/mylibs/Documents/Containers/DocumentPackContainer.js',//this is then entry point of the app(i.e the one that we point system.js at.)
    ouputFile: 'libs.js',
    targetFolder: 'documents',
    filesToRemove: [],
    //the following will override the default config
    development: {
        filesToRemove: [ paths.jspm.allAppCodePattern, 'js/mylibs/Documents/ViewModels/DocumentFormConfigModel.js', 'js/mylibs/Utility/IndexofEnums.js' ]
    },
    staging:{},
    release:{}
}

//TODOxAR add to paths
var bundles = [
    documentBundle
];

var retrieveBundles = function (env) {

    //set environment on map function
    var converterWithEnv = convertBundle.bind(null,env);

    //use the partially applied function for array map
    var bundlesToExport = bundles.map(converterWithEnv);

    return bundlesToExport;
}

function convertBundle(environment, bundleConfig) {

    var bundleToExport = {};//this is the object that gulp-jspm will consume

    var bundleInfoWithTransform = bundleConfig;
    //if we have environment specific transforms
    if (!!bundleConfig[environment]) {
        //override release settings with development
        bundleInfoWithTransform = objectAssign({}, bundleConfig, bundleConfig[environment]);
    }

    bundleToExport.src = bundleInfoWithTransform.main;

    if (bundleInfoWithTransform.filesToRemove && bundleInfoWithTransform.filesToRemove.length > 0) {

        var excludeExpression = ' - ' + bundleInfoWithTransform.filesToRemove.join(' - ');

        bundleToExport.src += excludeExpression;
    }

    bundleToExport.dst = bundleInfoWithTransform.targetFolder + '/' + bundleInfoWithTransform.ouputFile;

    return bundleToExport;
}

//exported stuff
exports.retrieveBundles = retrieveBundles;

gulp.task('deploy', function(){

    gulp.task('deploy:bundle-jspm', function () {
        jspm({
            bundleOptions: {
                minify: true,
                mangle: true
            },
            bundles:retrieveBundles(environment)
        })
        .pipe(gulp.dest(paths.webroot + paths.jspm.bundleFolder));//TODOxAR add to paths
    });

});

gulp.task('deploy:min-js', function () {
    return gulp.src([paths.js, '!' + paths.minJs], { base: '.' })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('deploy:min-css', function () {
    return gulp.src([paths.css, '!' + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest('.'));
});
