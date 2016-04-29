var cozTmpl = require('coz-tmpl');

module.exports = cozTmpl.nodeunitTestJsBud({
    dest: __dirname,
    src:__dirname + '/../lib/*.js'
});

if (!module.parent) {
    require('coz').render(__filename);
}