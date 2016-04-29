/**
 * Test case for parseType.
 * Runs with nodeunit.
 */

var parseType = require('../lib/type/parse_type.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Parse type'] = function (test) {
    test.equal(parseType('number'), 'number');
    test.equal(parseType('Number'), 'number');
    test.equal(parseType(' number '), 'number');
    test.equal(parseType(' Number '), 'number');
    test.equal(parseType(Function), 'function');
    test.equal(parseType(String), 'string');
    test.equal(parseType(Array), 'array');
    test.equal(parseType(Number), 'number');
    test.done();
};

