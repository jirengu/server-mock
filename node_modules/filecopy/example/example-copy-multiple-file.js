#!/usr/bin/env node

var filecopy = require('filecopy');

// Copy all files in src directory to dir.
filecopy('src/*.txt', 'dest', {}, function (err) {
    /*...*/
});
