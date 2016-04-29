#!/usr/bin/env node

/**
 * Build this project.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeCompiling = require('ape-compiling'),
    coz = require('coz');

apeTasking.runTasks('build', [
    function renderBud(callback) {
        coz.render([
            '.*.bud',
            'lib/.*.bud',
            'test/.*.bud'
        ], callback);
    },
    function browsify(callback) {
        var src = require.resolve('../lib'),
            dest = require('../bower.json')['main'];
        apeCompiling.renderBrowserScript(src, dest, {
            as: 'argx'
        }, callback);
    }
], true);
