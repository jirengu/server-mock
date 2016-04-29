/**
 * Test case for mochaTestJsBud.
 * Runs with nodeunit.
 */
"use strict";

const mochaTestJsBud = require('../lib/mocha_test_js_bud.js'),
    assert = require('assert');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Mocha test js bud'] = function (test) {
    let bud = mochaTestJsBud({
        src: __filename,
        dest: __dirname + '/../tmp'
    });
    test.ok(bud);
    test.done();
};

