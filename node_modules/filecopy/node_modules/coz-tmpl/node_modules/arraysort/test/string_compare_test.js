/**
 * Test case for stringCompare.
 * Runs with nodeunit.
 */

"use strict";

const stringCompare = require('../lib/string_compare.js');

exports['Sort string.'] = function (test) {
    test.deepEqual(
        ['a', 'b', 'c'],
        ['a', 'c', 'b'].sort(stringCompare())
    );
    test.deepEqual(
        ['c', 'b', 'a'],
        ['a', 'c', 'b'].sort(stringCompare({desc: true}))
    );
    test.done();
};

exports['Try invalid args.'] = function (test) {
    test.throws(function () {
        stringCompare('foo', 'bar');
    });
    test.done();
};