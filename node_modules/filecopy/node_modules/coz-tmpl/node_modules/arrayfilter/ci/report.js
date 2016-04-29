#!/usr/bin/env node

/**
 * Send reports.
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    apeReporting = require('ape-reporting');

apeTasking.runTasks([
    (callback) => {
        apeReporting.sendToCodeclimate('docs/coverage/lcov.info', callback);
    }
], true);
