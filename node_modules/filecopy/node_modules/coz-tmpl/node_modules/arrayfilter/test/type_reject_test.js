/**
 * Test case for typeReject.
 * Runs with nodeunit.
 */

const typeReject = require('../lib/type_reject.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Type reject'] = function (test) {

    var filter = typeReject('string');
    test.ok(filter(() => {
    }));
    test.ok(filter(123));
    test.ok(filter({}));
    test.ok(!filter('__foo'));
    test.throws(() => {
        [1, {}, () => {
        }].filter(typeReject);
    });
    test.done();
};

