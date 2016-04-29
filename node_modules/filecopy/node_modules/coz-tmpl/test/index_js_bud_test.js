/**
 * Test case for indexJsBud
 * Runs with nodeunit.
 */
"use strict";

const indexJsBud = require('../lib/index_js_bud.js'),
    assert = require('assert');

exports['Index js bud'] = function (test) {
    let bud = indexJsBud({
        dirname: __dirname
    });
    test.ok(bud);
    test.ok(bud.data.modules);
    test.done();
};
