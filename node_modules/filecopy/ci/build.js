#!/usr/bin/env node

/**
 * Build this project.
 */

"use strict";

var path = require('path'),
    apeTasking = require('ape-tasking'),
    coz = require('coz');

var basedir = path.resolve(__dirname, '..');

process.chdir(basedir);

apeTasking.runTasks('build', [
    function (callback) {
        coz.render([
            '.*.bud',
            'lib/.*.bud',
            'test/.*.bud'
        ], callback);
    }
], true);

