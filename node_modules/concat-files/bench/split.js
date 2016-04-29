var fs = require('fs');
var stream = require('stream');
var path = require('path');

var books = 'fixtures/books/';
var toconcat = 'fixtures/toconcat/';

function findBooks() {
  return fs.readdirSync(books).map(function(file) {
    return books + file;
  }).slice(-2);
}

splitAllBooks();

function splitAllBooks() {
  var i = 0;
  var seed = Math.random().toFixed(4).toString().slice(2);;

  findBooks().forEach(function(book) {
    var reader = fs.createReadStream(book);
    var splitter = new stream.Writable();
    splitter._write = function(chunk, encoding, cb) {
      i++;
      var dest = toconcat + path.basename(book, '.txt') + i + '-' + seed + '.txt';
      fs.writeFile(dest, chunk, cb);
    }
    reader.pipe(splitter);
  });
}

