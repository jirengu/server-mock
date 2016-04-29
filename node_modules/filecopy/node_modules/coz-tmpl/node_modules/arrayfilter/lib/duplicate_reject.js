/**
 * Create a filter function to reject empty.
 * @memberof module:arrayfilter/lib
 * @function duplicateReject
 * @returns {function} - Filter function to reject duplicated entry.
 */

"use strict";

/** @lends duplicateReject */
function duplicateReject() {
    if (arguments.length > 1) {
        throw new Error('[duplicateReject] Invalid args.');
    }
    return function filter(entry, i, array) {
        return array.indexOf(entry) === i;
    };
}

module.exports = duplicateReject;