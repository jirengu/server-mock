"use strict";

const arrayfilter = require('arrayfilter');

// Define a filter function.
let rejectFo = arrayfilter.patternReject(/^fo/);

// Execute filtering.
let values = ['foo', 'bar', 'baz'].filter(rejectFo);
console.log(values); // -> ['bar', 'baz']

