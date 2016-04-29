var app = require('./app');
var express = require('express');
var concat = require('concat-files');
var path = require('path');
var filecopy = require('filecopy');

function command(opts) {

	if (opts.command === "start") {
		port = opts.args.port || 8080;
		tpl = opts.args.tpl || 'ejs';
		viewsPath = opts.args.views ? (process.cwd() + '/' + opts.args.views) : process.cwd();
		publicPath = opts.args.public ? (process.cwd() + '/' + opts.args.public) : process.cwd();
		routerFile = process.cwd() + '/router.js';


		app.use(express.static(publicPath));
		app.set('views', viewsPath);
		app.set('view engine', tpl);
		concat([path.join(__dirname, 'router-fragment.js'), routerFile], path.join(__dirname, 'router.js'), function() {
			require('./router');
		});

		app.listen(port);
		console.log('在浏览器打开链接: http://localhost:' + port);

	} else if (opts.command === "init") {

		filecopy(path.join(__dirname, '../sample/*'), process.cwd(), {}, function(err) {
			if (err) new Error('初始化数据出错');
			console.log('初始化完成,执行：' + opts.args['$0'] + ' start 来启动服务吧~')
		});

	} else {
		console.error("输入命令有误");
	}


}

module.exports = command;