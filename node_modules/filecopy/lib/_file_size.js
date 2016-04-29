/**
 * @function _fileSize
 */

"use strict";

var fs = require('fs'),
    async = require('async');

/** @lends _fileSize */
function _fileSize(filename, callback) {
    fs.exists(filename, function (exists) {
        if (!exists) {
            callback(null, 0);
            return;
        }
        async.waterfall([
            function (callback) {
                fs.stat(filename, callback);
            },
            function (state, callback) {
                callback(null, state['size']);
            }
        ], callback);
    });
}

module.exports = _fileSize;
