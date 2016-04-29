var concat = require('..');
var temp = require('temp');
var fs = require('fs');
var assert = require('assert');

describe('when we concat files', function() {
  var files = [];
  var destination = temp.openSync().path;
  var expected = '';

  before(function() {
    var tmp;
    for (var i = 1; i <= 10; i++) {
      tmp = temp.openSync().path;
      expected += 'data ' + i;
      files.push(tmp);
      fs.writeFileSync(tmp, 'data ' + i);
    }
  });

  it('we get the expected content', function(done) {
    concat(files, destination, function(err) {
      assert.equal(err, null, 'We have no error');
      var actual = fs.readFileSync(destination).toString();
      assert.equal(actual, expected);
      done();
    })
  });

});