/**
 * Create a filter function to accept values matches type.
 * @memberof module:arrayfilter/lib
 * @function typeAccept
 * @param {string} type - Type to match.
 * @returns {function} - Accept function to accept the pattern.
 */

"use strict";

/** @lends typeAccept */
function typeAccept(type) {
    if (arguments.length > 1) {
        throw new Error('[typeAccept] Invalid args.');
    }
    return function filter(value) {
        return typeof(value) === type;
    };
}

module.exports = typeAccept;