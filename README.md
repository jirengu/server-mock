# server-mock
Start a web server, and mock data. Inspired by Express.

## Installation
```
npm install -g server-mock
```

## Usage
### Run as a static server
```
server start
# or
mock start
# or
server open
```

### Mock data
1. create a router.js file in current folder
2. edit router.js file
```javascript
app.get('/hello', function(req, res) {
  res.send({
    status: 0,
    msg: "hello hunger valley"
  })
});
```
3. in your index.html

```javascript
 $.get('/hello').done(function(ret){
  	console.log(ret);
  });
```

You can run `server init` to create example files such as router.js and index.html, and run `server start` to test your server.

Your can refer to http://expressjs.com/en/guide/routing.html to see more usage of router.

More usage
``` 
server start --port 3000         
server start --public public    
server start --views views    
server start --tpl ejs        
server start --tpl ejs --port 3003

```

