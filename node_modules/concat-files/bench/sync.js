module.exports = concat;

function concat(files, destination) {
  var fs = require('fs');
  var result = '';

  files.forEach(function(file) {
    result += fs.readFileSync(file).toString();
  });

  fs.writeFileSync(destination, result);
}