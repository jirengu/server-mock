#!/usr/bin/env node

/**
 * Take coverage.
 */

"use strict";

var path = require('path'),
    apeTasking = require('ape-tasking'),
    apeCovering = require('ape-covering');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('cover', [
    function (callback) {
        apeCovering.measureCoverage(
            require.resolve('./test.js'), [], {
                dir: 'coverage'
            }, callback
        );
    }
], true);