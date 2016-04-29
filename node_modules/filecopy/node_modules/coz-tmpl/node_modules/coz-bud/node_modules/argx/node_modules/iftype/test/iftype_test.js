/**
 * Test case for iftype.
 * Runs with nodeunit.
 */

var Iftype = require('../lib/iftype.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Iftype'] = function (test) {
    test.ok(new Iftype(1).is('number'));
    test.ok(!new Iftype('foo').is('number'));
    test.ok(new Iftype(1).isNumber());
    test.ok(!new Iftype('foo').isNumber());
    test.ok(!new Iftype(123).is('string'));
    test.ok(!new Iftype(123).isString());
    test.ok(new Iftype('foo').is('string'));
    test.ok(new Iftype('foo').isString());
    test.ok(new Iftype(function () {
    }).is('function'));
    test.ok(new Iftype(function () {
    }).isFunction());
    test.ok(!new Iftype('1234').is('function'));
    test.ok(!new Iftype('1234').isFunction());
    test.ok(!new Iftype(123).is('function'));
    test.ok(!new Iftype(123).isFunction());
    test.done();
};

