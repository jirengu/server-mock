#!/usr/bin/env node

/**
 * Measure coverage.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeCovering = require('ape-covering');

apeTasking.runTasks('cover', [
    function (callback) {
        apeCovering.measureCoverage(
            require.resolve('./test.js'), [], {
                dir: 'docs/coverage'
            }, callback
        );
    }
], true);