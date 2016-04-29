/**
 * Create a filter function to reject values matches type.
 * @memberof module:arrayfilter/lib
 * @function typeReject
 * @param {string} type - Type to match.
 * @returns {function} - Reject function to reject the pattern.
 */

"use strict";

/** @lends typeReject */
function typeReject(type) {
    if (arguments.length > 1) {
        throw new Error('[typeReject] Invalid args.');
    }
    return function filter(value) {
        return typeof(value) !== type;
    };
}

module.exports = typeReject;