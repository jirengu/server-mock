/**
 * Utility functions for copying.
 * @module coz-bud/lib/copying
 */

"use strict";

module.exports = {
    get copy() { return require('./copy'); },
    get fallbackCopy() { return require('./fallback_copy'); }
};