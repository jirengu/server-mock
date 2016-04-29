/**
 * Test case for typeAccept.
 * Runs with nodeunit.
 */
"use strict";

const typeAccept = require('../lib/type_accept.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Type accept'] = function (test) {
    let filter = typeAccept('string');
    test.ok(!filter(() => {
    }));
    test.ok(!filter(123));
    test.ok(!filter({}));
    test.ok(filter('__foo'));
    test.throws(() => {
        [1, {}, () => {
        }].filter(typeAccept);
    });
    test.done();
};

