/**
 * Check types
 * @module iftype
 * @version 1.1.1
 */

"use strict";

var IfType = require('./iftype'),
    is = require('./is'),
    create = require('./create');

var lib = create.bind();
lib.create = create;
lib.IfType = IfType;

lib.is = is;
lib.isString = is.bind(lib, 'string');
lib.isNumber = is.bind(lib, 'number');
lib.isObject = is.bind(lib, 'object');
lib.isArray = is.bind(lib, 'array');
lib.isFunction = is.bind(lib, 'function');

module.exports = lib;
