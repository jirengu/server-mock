/**
 * Detect a file path is module or not.
 * @function _isModule
 * @param {string} name - Name to test.
 * @returns {boolean} - Detect a module or not.
 * @private
 */

"use strict";

/** @lends _isModule */
function _isModule(name) {
    try {
        require.resolve(name);
        return true;
    } catch (e) {
        return false;
    }
}
module.exports = _isModule;