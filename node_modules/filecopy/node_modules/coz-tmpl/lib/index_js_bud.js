/**
 * Bud for index.js
 * @memberof module:coz-tmpl/lib
 * @function indexJsBud
 * @param {object} config - Index js configuration.
 * @param {string} config.dirname - Directory name.
 * @param {string} [config.desc] - Module description.
 * @param {string} [config.module] - Module annotation.
 * @param {string} [config.parentmodule] - Name of parent module.
 * @param {string[]} [config.submodules] - Name of members as submodule.
 * @param {string[]} [config.subclasses] - Name of members as subclasses
 * @returns {module:coz-bud/lib~Bud} - Bud for index.js
 */

"use strict";

const EOL = require('os').EOL,
    arrayfilter = require('arrayfilter'),
    arraysort = require('arraysort'),
    stringcase = require('stringcase'),
    cozBud = require('coz-bud'),
    assert = require('assert'),
    path = require('path'),
    fs = require('fs'),
    _tmpl = require('./_tmpl');

/** @lends indexJsBud */
function indexJsBud(config) {
    var dirname = config.dirname;
    assert.ok(!!dirname, 'config.dirname is required.');
    return cozBud({
        force: true,
        mode: '444',
        path: path.resolve(dirname, 'index.js'),
        mkdirp: false,
        tmpl: _tmpl('index.js.hbs'),
        data: {
            END_BRACE: '}',
            desc: [].concat(config.desc || []).join(EOL + ' * '),
            module: config.module,
            parentmodule: [].concat(config.parentmodule || []),
            get modules() {
                let submodules = [].concat(config.submodules || []),
                    subclasses = [].concat(config.subclasses || []);
                return fs.readdirSync(dirname)
                    .sort(arraysort.stringCompare())
                    .filter(arrayfilter.patternReject(/^[\._]/))
                    .filter(arrayfilter.patternReject(/~$/))
                    .filter(arrayfilter.patternReject(/.tmp$/))
                    .filter(arrayfilter.patternReject(/^index\.js$/))
                    .filter(function (filename) {
                        try {
                            require.resolve(path.resolve(dirname, filename));
                            return true;
                        } catch (e) {
                            return false;
                        }
                    })
                    .map((filename) => {
                        try {
                            var name = path.basename(filename, path.extname(filename));
                            return {
                                name: name,
                                requireName: name.split(/\./g).map(stringcase.snakecase).join('.'),
                                isSubmodules: ~submodules.indexOf(stringcase.camelcase(name)),
                                isSubclass: ~subclasses.indexOf(stringcase.camelcase(name)) || ~subclasses.indexOf(stringcase.pascalcase(name))
                            };
                        } catch (e) {
                            return null;
                        }
                    })
                    .filter(arrayfilter.emptyReject());
            }
        }
    });
}

module.exports = indexJsBud;

