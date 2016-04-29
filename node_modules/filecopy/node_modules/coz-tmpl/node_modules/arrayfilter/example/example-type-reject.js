"use strict";

const arrayfilter = require('arrayfilter');

// Define a filter function.
let rejectString = arrayfilter.typeReject('object');

// Execute filtering.
let values = ['foo', {}, {}].filter(rejectString);
console.log(values); // -> ['foo']
