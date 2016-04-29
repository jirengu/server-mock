#!/usr/bin/env node

/**
 * Send reports.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeReporting = require('ape-reporting');

apeTasking.runTasks('report', [
    function sendToCodeclimate(callback) {
        apeReporting.sendToCodeclimate('coverage/lcov.info', callback);
    }
], true);
