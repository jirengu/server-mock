/**
 * Copy object properties.
 * @memberof module:coz-bud/lib/copying
 * @function copy
 * @param {object} src - Object to copy from.
 * @param {object?} dest - Object to copy to.
 * @returns {object} - Dest object.
 */

"use strict";

/** @lends copy */
function copy(src, dest) {
    src = src || {};
    dest = dest || {};
    var keys = Object.keys(src);
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        dest[key] = src[key];
    }
    return dest;
}

module.exports = copy;

