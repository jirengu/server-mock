"use strict";

const arrayfilter = require('arrayfilter');

// Define a filter function.
let rejectEmpty = arrayfilter.emptyReject();

// Execute filtering.
let values = ['foo', '', null, 'bar', undefined].filter(rejectEmpty);
console.log(values); // -> ['foo', 'bar']
