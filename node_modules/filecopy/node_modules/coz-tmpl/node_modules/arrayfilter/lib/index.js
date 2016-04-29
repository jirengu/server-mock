/**
 * Array filtering utility.
 * @module arrayfilter
 */

"use strict";

module.exports = {
    get duplicateReject() { return require('./duplicate_reject'); },
    get emptyReject() { return require('./empty_reject'); },
    get patternAccept() { return require('./pattern_accept'); },
    get patternReject() { return require('./pattern_reject'); },
    get typeAccept() { return require('./type_accept'); },
    get typeReject() { return require('./type_reject'); }
};