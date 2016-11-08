# server-mock
server-mock 是一个简单好用的用于前后端分离的 mock 利器， 基于 express 开发，可方便的 mock 数据。

和一般基于配置的 mock 工具不同，server-mock可以创建使用范例，让使用者可让使用者模仿范例简单快捷的实现需求。


## 工具原理
前端和后端工作的交集体现在两个方面：

1. 后端模板的渲染； 
2. ajax 接口的处理。

在前端在开发过程中与后端在正式联调前必须要进行自测，也就是说自己需要搭建个后端网站雏形来模拟数据，用来处理自己前端的ajax请求以及模板渲染。 耗时费力，对刚刚会使用 ajax 无任何后端经验的同学简直是噩梦。

### server-mock 如何解放生成力呢？
server-mock本质上就是 基于 node express网站的简化修正版，但把业务无关的部分隐藏起来对用户透明，对用户只暴露出网站后台的核心——路由处理部分。全局安装完server-mock后可在任何地方使用mock 命令，把当前文件夹变为 webserver 目录。用户只要在当前文件夹下写好 html 文件于ajax 请求接口，在router.js 使用 js 语法写好对应请求的响应处理就行了。

###

比如, 在index.html里有get 请求
```
 $.get('/hello').done(function(ret){
  	console.log(ret);
  });
```
### 
在 router.js里只需要写下相应的相应就行
```
app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
	});
});
```

server-mock还支持页面路由解析与模板渲染，在router.js里设置好对应路由下需要展示的数据以及对应的模板文件，即可通过浏览器看到渲染后的效果。




## 安装
```
npm install -g server-mock
```

## 使用

### 1. 切换到项目文件夹
```
cd myTargetFolder
```
### 2. 初始化使用范例
```
mock init
```
此时`myTargetFolder下`会自动生成 `index.html` 、`router.js`、`user.ejs`。 其中index.html是前端静态 html，里面有 ajax 的接口调用。 `router.js` 是后端对应的路由处理范例文件，当mock-server启动后请求会被该文件对应的路由接口处理。 `user.ejs`是模板范例，当需要开发模板时可以在 router.js里渲染该模板。

### 3. 启动 webserver
```
mock start
```
在浏览器输入 http://localhost:8080 即可预览

## 详细使用方法
``` 
mock start --port 3000         // 设置服务器启动端口为3000
mock start --public public    //设置静态文件路径为当前文件 public 目录。默认是当前文件夹
mock start --views views     //设置模板路径为当前文件 views 目录。默认是当前文件夹
mock start --tpl ejs        //设置模板，支持 ejs, jade, velocity
mock start --tpl ejs --port 3000"  //设置模板为ejs,端口为3000。 默认端口是8080

```

## 作者
饥人谷-若愚

欢迎大家 pull request，共同完善最简单无脑的 mock 工具
