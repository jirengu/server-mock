/**
 * Test for index.js
 * Runs with nodeunit.
 */

"use strict";

var index = require('../lib/index');

exports['Eval properties.'] = function (test) {
    test.ok(index);
    Object.keys(index).forEach(function (key) {
        test.ok(key);
        test.ok(index[key]);
    });
    test.done();
};