/**
 * Expand glob file patterns.
 * @function _expandGlob
 * @param {string|string[]} patterns - Patterns to expand.
 * @returns {string[]} - Expanded file names.
 */

"use strict";

const path = require('path'),
    glob = require('glob'),
    arrayreduce = require('arrayreduce');

/** @lends _expandGlob */
function _expandGlob(pattern) {
    return [].concat(pattern)
        .map(filename => glob.sync(path.resolve(filename)))
        .reduce(arrayreduce.arrayConcat(), [])
}

module.exports = _expandGlob;