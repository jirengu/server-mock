var files = createFiles(20);
var destination = require('temp').openSync().path;

module.exports = {
  compare : {
    'Synchronous string concat' :
      require('./sync.js').bind(null, files, destination),
    'Synchronous Buffers array' :
      require('./syncbuffers.js').bind(null, files, destination),
    'Dumb asynchronous Buffers array':
      wrap(require('./dumbasync.js'), files, destination),
    'async.mapSeries asynchronous Buffers array':
      wrap(require('./asyncmapseries.js'), files, destination),
  }
}

require("bench").runMain();

function wrap(async, files, destination) {
  return function wrapped(cb) {
    async(files, destination, cb);
  }
}

function createFiles(n) {
  var fs = require('fs');
  var temp = require('temp');

  var files = [];
  var current;
  for(var i = 0; i <=n; i++) {
    current = temp.openSync().path;
    fs.writeFileSync(current, new Buffer(1024*1024*Math.random()));
    files.push(current);
  }
  return files;
}