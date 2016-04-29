/**
 * Build-in templates for coz.
 * @module coz-tmpl
 */

"use strict";

module.exports = {
    get indexJsBud() { return require('./index_js_bud'); },
    get mochaTestJsBud() { return require('./mocha_test_js_bud'); },
    get nodeunitTestJsBud() { return require('./nodeunit_test_js_bud'); }
};