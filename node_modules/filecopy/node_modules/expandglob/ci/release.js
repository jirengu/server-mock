#!/usr/bin/env node

/**
 * Release this package.
 */

"use strict";

var path = require('path'),
    apeTasking = require('ape-tasking'),
    apeReleasing = require('ape-releasing');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('release', [
    function (callback) {
        apeReleasing.releasePackage({
            beforeRelease: [
                './ci/build.js',
                './ci/test.js'
            ]
        }, callback);
    }
], true);