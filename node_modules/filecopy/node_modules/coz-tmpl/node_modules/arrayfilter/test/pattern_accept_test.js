/**
 * Test case for patternAccept.
 * Runs with nodeunit.
 */
"use strict";

const patternAccept = require('../lib/pattern_accept.js');

exports['Pattern accept'] = function(test){
    let filter = patternAccept(/^__/);
    test.ok(!filter('foo'));
    test.ok(filter('__foo'));
    test.throws(() => {
        [1, 2, 3].filter(patternAccept);
    });
    test.done();
};

