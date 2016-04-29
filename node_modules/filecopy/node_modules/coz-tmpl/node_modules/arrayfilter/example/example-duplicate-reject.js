"use strict";

const arrayfilter = require('arrayfilter');

// Define a filter function.
let duplicateReject = arrayfilter.duplicateReject();

// Execute filtering.
let values = ['foo', 'bar', 'foo'].filter(duplicateReject);
console.log(values); // -> ['foo', 'bar']
