/**
 * Test case for nodeunitTestJsBud
 * Runs with nodeunit.
 */
"use strict";

const nodeunitTestJsBud = require('../lib/nodeunit_test_js_bud.js'),
    assert = require('assert');

exports['Nodeunit testcase js bud'] = function (test) {
    let bud = nodeunitTestJsBud({
        src: __filename,
        dest: __dirname + '/../tmp'
    });
    test.ok(bud);
    test.done();
};

