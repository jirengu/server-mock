/**
 * Test for index.
 * Runs with nodeunit.
 */

"use strict";

var index = require('../lib/index.js');

exports['Eval properties.'] = function(test){
    test.ok(index);
    test.equal(typeof index, 'function');
    test.ok(index.create);
    test.ok(index.Bud);
    test.done();
};
