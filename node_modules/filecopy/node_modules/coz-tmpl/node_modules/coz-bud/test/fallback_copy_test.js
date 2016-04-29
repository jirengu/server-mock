/**
 * Testcase for copying/fallback_copy.js
 * Runs with nodeunit.
 */

"use strict";

var fallbackCopy = require('../lib/copying/fallback_copy.js');

exports['Copy an object.'] = function (test) {
    var obj1 = {foo: 'bar', quz: 'quzz'},
        obj2 = {foo: 'baz'};
    fallbackCopy(obj1, obj2);
    test.deepEqual(obj2, {
        foo: 'baz',
        quz: 'quzz'
    });
    test.done();
};