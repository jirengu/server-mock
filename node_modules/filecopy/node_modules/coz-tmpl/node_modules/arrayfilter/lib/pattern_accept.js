/**
 * Create a filter function to accept values matches a pattern.
 * @memberof module:arrayfilter/lib
 * @function patternAccept
 * @param {string|RegExp} pattern - Pattern to accept.
 * @returns {function} - Accept function to accept the pattern.
 */

"use strict";

/** @lends patternAccept */
function patternAccept(pattern) {
    if (arguments.length > 1) {
        throw new Error('[patternAccept] Invalid args.');
    }
    return function filter(value) {
        return String(value).match(pattern);
    };
}

module.exports = patternAccept;