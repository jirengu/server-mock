/**
 * Create new buds.
 * @memberof module:coz-bud/lib
 * @function create
 * @param {object} config - Bud config.
 * @returns {Bud} - A new bud instance.
 */
"use strict";

var Bud = require('./bud');

/** @lends create */
function create(config) {
    if (typeof(config) === 'string') {
        config = {src: config};
    }
    return new Bud(config);
}

module.exports = create;
