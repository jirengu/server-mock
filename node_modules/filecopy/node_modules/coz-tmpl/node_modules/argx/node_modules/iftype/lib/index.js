/**
 * Check types
 * @module iftype
 * @version 2.0.4
 */

"use strict";

const IfType = require('./iftype'),
    is = require('./is'),
    create = require('./create');

let lib = create.bind();
lib.create = create;
lib.IfType = IfType;

lib.is = is;
lib.isString = is.bind(lib, 'string');
lib.isNumber = is.bind(lib, 'number');
lib.isObject = is.bind(lib, 'object');
lib.isArray = is.bind(lib, 'array');
lib.isFunction = is.bind(lib, 'function');

module.exports = lib;
