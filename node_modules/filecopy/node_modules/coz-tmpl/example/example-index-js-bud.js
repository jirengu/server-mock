var cozTmpl = require('coz-tmpl');

module.exports = cozTmpl.indexJsBud({
    dirname: __dirname,
    desc: 'Some node module dir',
    module: 'foo'
});

if (!module.parent) {
    require('coz').render(__filename);
}