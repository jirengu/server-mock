/**
 * Test case for emptyReject.
 * Runs with nodeunit.
 */
"use strict";

const emptyReject = require('../lib/empty_reject.js');

exports['Empty reject'] = function (test) {
    let filter = emptyReject();
    test.ok(filter('foo'));
    test.ok(!filter(null));
    test.ok(!filter(undefined));
    test.ok(!filter(''));
    test.throws(() => {
        [1, 2, 3].filter(emptyReject);
    });
    test.done();
};

