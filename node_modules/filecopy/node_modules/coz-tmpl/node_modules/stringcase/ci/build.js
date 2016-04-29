#!/usr/bin/env node

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    coz = require('coz');

apeTasking.runTasks('build', [
    (callback) => {
        coz.render([
            '.*.bud',
            'doc/**/.*.bud',
            'example/**/.*.bud',
            'lib/.*.bud',
            'test/.*.bud'
        ], callback);
    }
], true);

