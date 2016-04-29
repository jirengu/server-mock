/**
 * Detect if type hits.
 * @memberof module:iftype/lib/type
 * @function typeHits
 * @param {*} value - Value to check with.
 * @param {string|object|string[]|object[]} type - Type to check with.
 * @returns {boolean} - Hit or not.
 * @private
 */
"use strict";

var parseType = require('./parse_type');

/** @lends typeHits */
function typeHits(value, type) {
    var isEmpty = (typeof(value) === 'undefined') || (value === null);
    if (isEmpty) {
        return false;
    }
    var s = this;
    var isMultiple = Array.isArray(type);
    if (isMultiple) {
        return typeHits.anyOf(value, type);
    }
    type = parseType(type);
    var isArrayType = (type === 'array');
    if (isArrayType) {
        return Array.isArray(value);
    }
    switch (typeof(type)) {
        case 'string':
            if (/\|/.test(type)) {
                return typeHits.anyOf(value, type.split(/\|/g));
            }
            return typeof(value) === type;
        case 'function':
            return value instanceof(type);
        case 'object':
            return !!(type && type.isPrototypeOf) && type.isPrototypeOf(value);
        default:
            return false;
    }
}

/**
 * Detect if any of type hits.
 * @param {*} value - Value to check with.
 * @param {string[]|object[]} types - types to check.
 * @returns {boolean} - Hit or not.
 * @private
 */
typeHits.anyOf = function anyOfTypeHits(value, types) {
    for (var i = 0, len = types.length; i < len; i++) {
        var type = types[i];
        var hit = typeHits(value, type);
        if (hit) {
            return true;
        }
    }
    return false;
};

module.exports = typeHits;