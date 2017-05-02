var express = require('express');

var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var _eval = require('eval');
var fs = require('fs');
var pwd = process.cwd();
var filecopy = require('filecopy');
var chalk  = require("chalk");
var open = require("open");

var app;
var server;
var port;
var tpl;
var viewsPath;
var publicPath;


function command(opts) {

	if (opts.command === "start") {
		port = opts.args.port || 8080;
		tpl = opts.args.tpl || 'ejs';
		viewsPath = opts.args.views ? (path.join(pwd, opts.args.views)) : process.cwd();
		publicPath = opts.args.public ? (path.join(pwd, opts.args.public)) : process.cwd();
		
		setRouter()
		console.log(chalk.gray.bgGreen('Success') + ': server start success, open the link ' + chalk.underline.yellow('http://localhost:' + port) +' in browser');

	} else if (opts.command === "init") {
		filecopy(path.join(__dirname, '../sample/*'), process.cwd(), {}, function(err) {
			if (err) new Error('Init error');
			console.log('Init sample files success, run ' + chalk.bold.green(opts.args['$0'] + ' start') + ' to start server' )
		});

	} else if(opts.command === "open") {
		port = opts.args.port || 8080;
		tpl = opts.args.tpl || 'ejs';
		viewsPath = opts.args.views ? (path.join(pwd, opts.args.views)) : process.cwd();
		publicPath = opts.args.public ? (path.join(pwd, opts.args.public)) : process.cwd();
		var arr = fs.readdirSync(path.resolve(pwd)).filter(function(file){
			return /.html$/.test(file);
		})
		setRouter();
		var url;
		console.log(arr)
		if(arr.length > 0){
			if(arr.indexOf('index.html')>-1){
				url = 'http://localhost:' + port;
			}else{
				url = 'http://localhost:' + port + '/' + arr[0];
			}
			open(url)
		}
		
		console.log(chalk.gray.bgGreen('Success') + ': server start success, open the link ' + chalk.underline.yellow('http://localhost:' + port) +' in browser');
	}
}
function setRouter(opts){
	app = express();
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	var routerFile = path.join(pwd, 'router.js');
	var hiddenRouterFile =  path.join(pwd, '.router.js');
	if(!fs.existsSync(routerFile)){
		console.log(chalk.gray.bgYellow('Warning') + ': no router.js found. You may need to run: ' + chalk.bold.green("mock init")+' to create a sample router.js ')
	}else{
		var userRouterStr =  fs.readFileSync(routerFile, 'utf-8');
		var routerStr = 'function setRouter(app){ \n var router = app; \n\n' + userRouterStr + '}\n module.exports.setRouter = setRouter'
		fs.writeFileSync(hiddenRouterFile, routerStr)
		var setRouter = require(hiddenRouterFile).setRouter;
		setRouter(app)
	}


	app.use(express.static(publicPath));
	app.set('views', viewsPath);
	app.set('view engine', tpl);
	app.listen(port);
}

module.exports = command;