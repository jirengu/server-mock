/**
 * @function _isExistingDir
 * @private
 */

"use strict";

var fs = require('fs');

function _isExistingDir(filename, callback) {
    fs.exists(filename, function (exists) {
        if (exists) {
            fs.stat(filename, function (err, stat) {
                callback(!err && stat.isDirectory());
            });
        } else {
            callback(false);
        }
    });
}

module.exports = _isExistingDir;
