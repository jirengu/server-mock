/**
 * Parse arguments.
 * @constructor Argx
 * @param {Arguments} args - Function arguments
 */

"use strict";

var iftype = require('iftype'),
    isNumber = require('./type/is_number');

/** @lends constructor */
function Argx(args) {
    var s = this;
    s.values = Array.prototype.slice.call(args, 0);
}

Argx.prototype = {
    /**
     * Splice argument values.
     * @param {number} start - Where to start
     * @param {number} [howmany=1] - Number of value to get.
     * @param {string} [type] - Type restriction.
     */
    splice: function (start, howmany, type) {
        var s = this;

        if (typeof(arguments[1]) !== 'number') {
            if (isNumber(arguments[1])) {
                howmany = Number(arguments[1]);
            } else {
                type = arguments[1];
                howmany = 1;
            }
        }
        howmany = howmany || 1;
        if (start < 0) {
            start += s.values.length;
        }
        var result, hitCount = 0;
        for (var i = start + howmany - 1; i >= start; i--) {
            var skipByType = type && !iftype(s.values[i]).is(type);
            if (skipByType) {
                break;
            }
            var spliced = s.values.splice(i, 1);
            if (!spliced.length) {
                break;
            }
            spliced = spliced[0];
            switch (hitCount) {
                case 0:
                    result = spliced;
                    break;
                case 1:
                    result = [spliced, result];
                    break;
                default:
                    result.unshift(spliced);
                    break;
            }
            hitCount += 1;
        }
        return result;
    },
    /**
     * Pop values
     * @param {number|string} [howmany=1] - Number of value to get.
     * @param {string|function} [type] - Type restriction. Could be a name of type or a constructor.
     * @returns {*} - Value. Array if multiple hits.
     * @example
     *  function doSomething() {
     *      var args = argx(arguments);
     *      args.pop();
     *      args.pop(2);
     *      args.pop('string')
     *      args.pop(MyCustomError);
     *  }
     */
    pop: function (howmany, type) {
        var s = this;
        var from = -Number(howmany);
        if (isNaN(from)) {
            from = -1;
        }
        return s.splice(from, howmany, type);
    },
    /**
     * Shift values
     * @param {number|string} [howmany=1] - Number of value to get.
     * @param {string} [type] - Type restriction. Could be a name of type or a constructor.
     * @returns {*} - Value. Array if multiple hits.
     * @example
     *  function doSomething() {
     *      var args = argx(arguments);
     *      args.shift();
     *      args.shift(2);
     *      args.shift('string')
     *      args.shift(MyCustomError);
     *  }
     */
    shift: function (howmany, type) {
        var s = this;
        return s.splice(0, howmany, type);
    },
    /**
     * Get all remain values.
     * @returns {Array}
     */
    remain: function () {
        var s = this;
        var values = s.values;
        s.values = [];
        return values;
    }
};

module.exports = Argx;
