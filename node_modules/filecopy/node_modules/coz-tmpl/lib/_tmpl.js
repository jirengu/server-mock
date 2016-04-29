/**
 * Resolve template path.
 * @function _tmpl
 * @private
 */

"use strict";

var path = require('path');

var tmplDir = path.resolve(__dirname, '../tmpl');

/** @lends _tmpl */
function _tmpl(name) {
    return path.resolve(tmplDir, name);
}

module.exports = _tmpl;
