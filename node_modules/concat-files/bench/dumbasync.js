module.exports = concat;

function concat(files, destination, cb) {
  var fs = require('fs');
  var result = [];

  files.forEach(function(file) {
    fs.readFile(file, function(err, buf) {
      if (result.push(buf) === files.length) {
        fs.writeFile(destination, Buffer.concat(result), cb);
      }
    });
  });
}