#!/usr/bin/env node

/**
 * Release this package.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeReleasing = require('ape-releasing');


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