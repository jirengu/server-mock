/**
 * Test for filecopy.js
 * Runs with nodeunit.
 */

"use strict";

var filecopy = require('../lib/filecopy.js'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    fs = require('fs');

exports['Copy a single file with permission.'] = function (test) {
    var src = String(__filename),
        dest = 'tmp/foo/bar/copy11.txt';
    filecopy(src, dest, {
            mkdirp: true,
            mode: '444'
        },
        function (err) {
            test.ok(fs.existsSync(dest));
            test.ifError(err);
            test.done();
        }
    )
};

exports['Copy a single file.'] = function (test) {
    var src = String(__filename),
        dest = 'tmp/foo/bar/copy01.txt';
    filecopy(src, dest, {
            mkdirp: true
        },
        function (err) {
            test.ok(fs.existsSync(dest));
            test.ifError(err);
            test.done();
        }
    )
};

exports['Copy multiple files.'] = function (test) {
    var src = String(__dirname) + '/*.js',
        dest = 'tmp/foo/bar/baz';
    mkdirp.sync(dest);
    filecopy(src, dest, {
            mkdirp: true
        },
        function (err, results) {
            test.ok(fs.existsSync(dest + '/' + path.basename(__filename)));
            test.ifError(err);
            test.ok(results);
            test.done();
        }
    )
};