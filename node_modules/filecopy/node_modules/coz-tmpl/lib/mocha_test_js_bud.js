/**
 * Bud for mocha test.
 * @memberof module:coz-tmpl/lib
 * @function mochaTestJsBud
 * @param {object} config - Mocha testcase configuration.
 * @param {string|string[]} config.src - Source file name pattern.
 * @param {string} [config.dest] - Destination directory path.
 * @returns {module:coz-bud/lib~Bud} - Bud for mocha testcase.
 */

"use strict";

const path = require('path'),
    assert = require('assert'),
    cozBud = require('coz-bud'),
    _expandGlob = require('./_expand_glob'),
    _isModule = require('./_is_module'),
    _tmpl = require('./_tmpl');

/** @lends mochaTestJsBud */
function mochaTestJsBud(config) {
    var src = config.src,
        dest = config.dest || process.cwd();
    assert.ok(!!src, 'config.src is required.');
    return _expandGlob(src)
        .filter(src => path.basename(src) !== 'index.js')
        .filter(src => !/^[\._\-]/.test(path.basename(src)))
        .filter(_isModule)
        .map((src) => {
            let basename = path.basename(src, path.extname(src));
            return cozBud({
                force: false,
                mode: '644',
                mkdirp: false,
                tmpl: _tmpl('mocha_test.js.hbs'),
                path: path.resolve(dest, basename + '_test.js'),
                data: {
                    name: basename,
                    relative: path.relative(dest, src)
                }
            });
        });
}

module.exports = mochaTestJsBud;