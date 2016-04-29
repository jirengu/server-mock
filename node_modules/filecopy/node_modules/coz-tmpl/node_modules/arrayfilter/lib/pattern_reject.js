/**
 * Create a filter function to reject values matches a pattern.
 * @memberof module:arrayfilter/lib
 * @function patternReject
 * @param {string|RegExp} pattern - Pattern to reject.
 * @returns {function} - Filter function to reject the pattern.
 */

"use strict";

/** @lends patternReject */
function patternReject(pattern) {
    if (arguments.length > 1) {
        throw new Error('[patternReject] Invalid args.');
    }
    return function filter(value) {
        return !String(value).match(pattern);
    };
}

module.exports = patternReject;