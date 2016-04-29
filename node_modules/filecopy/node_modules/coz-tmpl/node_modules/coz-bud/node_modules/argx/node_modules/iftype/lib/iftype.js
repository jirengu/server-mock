/**
 * Type check instance.
 * @constructor Iftype
 * @param {*} value - Value to check.
 */

"use strict";

var is = require('./is');

/** @lends Iftype */
function Iftype(val) {
    var s = this;
    s.val(val);
}

Iftype.prototype = {
    /**
     * Detect type matches.
     * @param {string} type
     * @returns {boolean} - Type matches or not.
     */
    is: function typeIs(type) {
        var s = this;
        return is(type, s.val());
    },
    /**
     * Detect if string.
     * @returns {boolean} - Type matches or not.
     */
    isString: function isStringType() {
        var s = this;
        return s.is('string');
    },
    /**
     * Detect if number.
     * @returns {boolean} - Type matches or not.
     */
    isNumber: function isNumberType() {
        var s = this;
        return s.is('number');
    },
    /**
     * Detect if object.
     * @returns {boolean} - Type matches or not.
     */
    isObject: function isObjectType() {
        var s = this;
        return s.is('object');
    },
    /**
     * Detect if array.
     * @returns {boolean} - Type matches or not.
     */
    isArray: function isArrayType() {
        var s = this;
        return s.is('array');
    },
    /**
     * Detect if function.
     * @returns {boolean} - Type matches or not.
     */
    isFunction: function isFunctionType() {
        var s = this;
        return s.is('function');
    },
    val: function(val){
        var s = this;
        if (arguments.length === 0) {
            return s._val;
        }
        s._val = val;
        return s;
    }
};

module.exports = Iftype;
