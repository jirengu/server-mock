/**
 * Test case for noop.
 * Runs with nodeunit.
 */

var noop = require('../lib/noop.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Noop'] = function(test){
    noop();
    test.done();
};

