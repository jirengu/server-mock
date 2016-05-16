server-mock 是一个简单好用的 webserver， 基于 express 开发，可方便的 mock 数据。
'hello'

"hello"

## 安装
```
npm install -g server-mock
```

## 使用
1. 切换到项目文件夹
2. 初始化使用范例
```
mock init
```
3. 启动 webserver
```
mock start
```

##详细使用方法
``` 
start --port 3000         // 设置端口
start --public public    //设置静态文件路径为当前文件 public 目录。默认是当前文件夹
start --views views     //设置模板路径为当前文件 views 目录。默认是当前文件夹
start --tpl ejs        //设置模板，支持 ejs, jade
start --tpl ejs --port 3000"  //设置模板为ejs,端口为3000。 默认端口是8080

```
