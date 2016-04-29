/**
 * Bud for nodeunit test.
 * @memberof module:coz-tmpl/lib
 * @function nodeunitTestJsBud
 * @param {object} config - Nodeunit testcase configuration.
 * @param {string|string[]} config.src - Source file name pattern.
 * @param {string} [config.dest] - Destination directory path.
 * @returns {module:coz-bud/lib~Bud} - Bud for nodeunit testcase.
 */

"use strict";

const path = require('path'),
    assert = require('assert'),
    cozBud = require('coz-bud'),
    _expandGlob = require('./_expand_glob'),
    _isModule = require('./_is_module'),
    _tmpl = require('./_tmpl');

/** @lends nodeunitTestJsBud */
function nodeunitTestJsBud(config) {
    let src = config.src,
        dest = config.dest || process.cwd();
    assert.ok(!!src, 'config.src is required.');
    return _expandGlob(src)
        .filter(src => path.basename(src) !== 'index.js')
        .filter(src => !/^[\._\-]/.test(path.basename(src)))
        .filter(_isModule)
        .map(src => {
            let basename = path.basename(src, path.extname(src));
            return cozBud({
                force: false,
                mode: '644',
                mkdirp: false,
                tmpl: _tmpl('nodeunit_test.js.hbs'),
                path: path.resolve(dest, basename + '_test.js'),
                data: {
                    name: basename,
                    relative: path.relative(dest, src)
                }
            });
        });
}

module.exports = nodeunitTestJsBud;