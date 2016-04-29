/**
 * Create an instance.
 * @function create
 * @returns {Iftype} - Created instance.
 */

"use strict";

var IfType = require('./iftype');

/** @lends create */
function create(val) {
    return new IfType(val);
}

module.exports = create;
