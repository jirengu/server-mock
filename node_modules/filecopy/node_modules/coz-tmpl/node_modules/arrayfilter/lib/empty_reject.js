/**
 * Create a filter function to reject empty.
 * @memberof module:arrayfilter/lib
 * @function emptyReject
 * @returns {function} - Filter function to reject the empty.
 */

"use strict";

/** @lends emptyReject */
function emptyReject() {
    if (arguments.length > 1) {
        throw new Error('[emptyReject] Invalid args.');
    }
    return function filter(value) {
        return (value !== null) && (typeof(value) !== 'undefined') && (value !== '');
    };
}

module.exports = emptyReject;