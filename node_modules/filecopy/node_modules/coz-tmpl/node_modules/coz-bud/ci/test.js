#!/usr/bin/env node

/**
 * Run tests
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeTesting = require('ape-testing');

apeTasking.runTasks([
    function (callback) {
        apeTesting.runNodeunit('test/*_test.js', {}, callback);
    }
], true);