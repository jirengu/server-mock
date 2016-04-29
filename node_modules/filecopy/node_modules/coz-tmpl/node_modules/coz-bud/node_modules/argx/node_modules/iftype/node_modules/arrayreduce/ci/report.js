#!/usr/bin/env node

/**
 * Send reports.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeReporting = require('ape-reporting');

apeTasking.runTasks([
    function (callback) {
        apeReporting.sendToCodeclimate('docs/coverage/lcov.info', callback);
    }
], true);
