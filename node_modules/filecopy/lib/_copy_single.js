/**
 * @function _copySingle
 * @private
 */

"use strict";

var fs = require('fs'),
    async = require('async');

/** @lends _copySingle */
function _copySingle(src, dest, callback) {
    async.series([
        function (callback) {
            fs.exists(dest, function (exists) {
                if (exists) {
                    fs.chmod(dest, '777', callback);
                } else {
                    callback(null);
                }
            });
        },
        function (callback) {
            var aborted = false;

            var r = fs.createReadStream(src),
                w = fs.createWriteStream(dest);
            r.on("error", function (err) {
                done(err);
            });
            w.on("error", function (err) {
                done(err);
            });
            w.on("close", function (ex) {
                done();
            });
            r.pipe(w);

            function done(err) {
                if (aborted) {
                    return;
                }
                callback(err);
                aborted = true;
            }
        }
    ], callback);
}

module.exports = _copySingle;
