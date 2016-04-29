var concat = require('..');
var temp = require('temp');
var fs = require('fs');
var assert = require('assert');

describe('when a file is missing', function() {

  it('gives an error', function(done) {
    concat(['/unknown'], '/nowhere', function(err) {
      assert.notEqual(err, null);
      done();
    })
  });

});