module.exports = concat;

function concat(files, destination) {
  var fs = require('fs');
  var result = [];

  files.forEach(function(file) {
    result.push(fs.readFileSync(file));
  });

  fs.writeFileSync(destination, Buffer.concat(result));
}
