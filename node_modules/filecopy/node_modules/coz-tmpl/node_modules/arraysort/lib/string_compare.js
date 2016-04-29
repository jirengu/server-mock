/**
 * Sort by string comparing.
 * @memberof module:arraysort/lib
 * @function stringCompare
 * @param {object} [options] - Sort options.
 * @param {boolean} [options.desc=false] - Desc sort.
 * @returns {function} - Compare function.
 */

"use strict";

/** @lends stringCompare */
function stringCompare(options) {
    if (arguments.length > 1) {
        throw new Error('[stringCompare] Invalid args.');
    }
    options = options || {};
    let desc = !!options.desc;
    return function sort(a, b) {
        let compared = a.localeCompare(b);
        return compared * (desc ? -1 : 1);
    }
}

module.exports = stringCompare;