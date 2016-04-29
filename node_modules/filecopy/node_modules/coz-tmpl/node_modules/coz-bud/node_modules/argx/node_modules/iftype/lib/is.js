/**
 * @function is
 * @param {string} type
 * @param {val}
 */

"use strict";

var typeHits = require('./type/type_hits');

/** @lends is */
function is(type, val) {
    return typeHits(val, type);
}

module.exports = is;
