#!/usr/bin/env node

/**
 * Measure coverage.
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    apeCovering = require('ape-covering');

apeTasking.runTasks('cover', [
    (callback) => {
        apeCovering.measureCoverage(
            require.resolve('./test.js'), [], {
                dir: 'docs/coverage'
            }, callback
        );
    }
], true);