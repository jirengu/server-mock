/**
 * Test case for isNumber.
 * Runs with nodeunit.
 */

var isNumber = require('../lib/type/is_number.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Is number'] = function(test){
    test.equal(isNumber(0), true);
    test.equal(isNumber("0"), true);
    test.equal(isNumber(""), false);
    test.equal(isNumber([]), false);
    test.done();
};

