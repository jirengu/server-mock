/**
 * Testcase for copying/copy.js
 * Runs with nodeunit.
 */

"use strict";

var copy = require('../lib/copying/copy.js');

exports['Copy an object.'] = function (test) {
    var obj1 = {foo: 'bar', quz: 'quzz'},
        obj2 = {foo: 'baz'};
    copy(obj1, obj2);
    test.deepEqual(obj2, {
        foo: 'bar',
        quz: 'quzz'
    });
    test.done();
};