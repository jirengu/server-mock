/**
 * Test case for module:leaf/lib/bud.Bud
 * Runs with nodeunit.
 */

"use strict";

var Bud = require('../lib/bud.js');

exports['Create bud config.'] = function (test) {
    var config = new Bud({
        path: 'foo/bar'
    });
    test.ok(config);
    var config2 = new Bud(config);
    test.ok(config2);
    test.done();
};
