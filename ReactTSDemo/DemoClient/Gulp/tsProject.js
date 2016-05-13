'use strict';
var typescript = require('gulp-typescript');

var paths = require('./paths');

var tsConfigOverrides = {
    noExternalResolve: true,
    outDir: paths.ts.dest,
    sourceMap: false
}

var tsProject = typescript.createProject('./Scripts/tsconfig.json', tsConfigOverrides);

module.exports = tsProject;