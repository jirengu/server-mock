/**
 * Test case for duplicateReject.
 * Runs with nodeunit.
 */
"use strict";

const duplicateReject = require('../lib/duplicate_reject.js');

exports['Duplicate reject'] = function (test) {
    let filter = duplicateReject();
    test.deepEqual([1, 2, 1].filter(filter), [1, 2]);
    test.done();
};

