/**
 * Copy files.
 * @function filecopy
 * @param {string} src - Source file to copy from.
 * @param {string} dest - Destination file path.
 * @param {object} [options] - Optional settings.
 * @param {boolean} [options.mkdirp] - Make parent directory if needed.
 * @param {string} [options.mode] - File permission.
 * @param {function} [callback] - Callback when done.
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    fs = require('fs'),
    path = require('path'),
    expandglob = require('expandglob'),
    mkdirp = require('mkdirp'),
    _fileSize = require('./_file_size'),
    _copySingle = require('./_copy_single'),
    _isExistingDir = require('./_is_existing_dir');


/** @lends filecopy */
function filecopy(src, dest, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};
    dest = args.pop('string');
    if (!dest) {
        callback(new Error('dest is required.'));
        return;
    }
    var mode = options.mode;
    async.waterfall([
        function (callback) {
            expandglob(src, callback);
        },
        function (src, callback) {
            _isExistingDir(dest, function (destIsDir) {
                async.mapSeries(src, function (src, callback) {
                    var srcFilename = path.resolve(src),
                        destFilename = destIsDir ? path.join(dest, path.basename(src)) : path.resolve(dest);
                    async.series([
                        function (callback) {
                            if (options.mkdirp) {
                                mkdirp(path.dirname(destFilename), callback);
                            } else {
                                callback(null);
                            }
                        },
                        function (callback) {
                            _fileSize(destFilename, callback);
                        },
                        function (callback) {
                            _copySingle(srcFilename, destFilename, callback);
                        },
                        function (callback) {
                            _fileSize(destFilename, callback);
                        },
                        function (callback) {
                            if (mode) {
                                fs.chmod(destFilename, mode, callback);
                            } else {
                                callback(null);
                            }
                        }
                    ], function (err, results) {
                        var before = results[1],
                            after = results[3];

                        callback(err, {
                            filename: destFilename,
                            changed: before !== after
                        });
                    });
                }, function (err, results) {
                    var changed = {};
                    results.forEach(function (result) {
                        if (result.changed) {
                            var filename = result.filename;
                            changed[filename] = true;
                        }
                    });
                    callback(err, changed);
                });
            });
        }
    ], callback);
}


module.exports = filecopy;
