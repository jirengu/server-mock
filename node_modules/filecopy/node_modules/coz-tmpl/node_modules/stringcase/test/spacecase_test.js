/**
 * Test case for module:stringcase/lib.spacecase.
 * Runs with nodeunit.
 */

var spacecase = require('../lib/spacecase.js');

exports['Pathcase'] = function (test) {
    test.equal(spacecase('fooBar'), 'foo bar');
    test.equal(spacecase('foo_bar'), 'foo bar');
    test.equal(spacecase('foo-bar'), 'foo bar');
    test.equal(spacecase('foo.bar'), 'foo bar');
    test.equal(spacecase('_bar_baz'), ' bar baz');
    test.equal(spacecase('.bar_baz'), ' bar baz');
    test.equal(spacecase(''), '');
    test.strictEqual(spacecase(null), 'null');
    test.strictEqual(spacecase(undefined), 'undefined');
    test.done();
};

