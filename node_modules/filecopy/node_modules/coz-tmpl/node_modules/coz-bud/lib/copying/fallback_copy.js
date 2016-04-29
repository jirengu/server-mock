/**
 * Copy object properties unless defined in destination object.
 * @memberof module:coz-bud/lib/copying
 * @function fallbackCopy
 * @param {object} src - Object to copy from.
 * @param {object?} dest - Object to copy to.
 * @returns {object} - Dest object.
 *
 */

"use strict";

/** @lends fallbackCopy */
function fallbackCopy(src, dest) {
    src = src || {};
    dest = dest || {};
    var keys = Object.keys(src);
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        var val = dest[key];
        var shouldCopy = (typeof(val) === 'undefined');
        if (shouldCopy) {
            dest[key] = src[key];
        }
    }
    return dest;
}

module.exports = fallbackCopy;
