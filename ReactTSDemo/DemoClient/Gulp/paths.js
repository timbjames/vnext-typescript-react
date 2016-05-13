'use strict';
// Paths
var paths = {
    webroot: './wwwroot/'
};

paths.jspm = {
    bundleFolder : 'dist',
    allAppCodePattern : '[js/**/*.js]'
};

paths.maps = paths.webroot + 'js/maps/';
paths.js = paths.webroot + 'js/**/*.js';
paths.minJs = paths.webroot + 'js/**/*.min.js';
paths.css = paths.webroot + 'css/**/*.css';
paths.minCss = paths.webroot + 'css/**/*.min.css';
paths.concatJsDest = paths.webroot + 'js/site.min.js';
paths.concatCssDest = paths.webroot + 'css/site.min.css';

paths.packageFiles = ['./bower.json', './package.json'];

paths.ts = {
    src: './Scripts/**/*.{ts,tsx}',
    typings: './Scripts/Typings/**/*.d.ts',
    dest: paths.webroot + 'js/mylibs/'
};

paths.urls = {
    siteHttps: 'https://localhost:44312',
    siteHttp: 'https://localhost:44312'
}

module.exports = paths;