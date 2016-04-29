#!/usr/bin/env/node

var filecopy = require('filecopy');

filecopy('src/some-text01.txt', 'dest/some-text01-copy.txt', {
    mkdirp: true
}, function(err){
    /*...*/
});
