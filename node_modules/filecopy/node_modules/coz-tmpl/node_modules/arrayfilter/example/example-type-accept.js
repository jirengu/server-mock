"use strict";

const arrayfilter = require('arrayfilter');

// Define a filter function.
let acceptString = arrayfilter.typeAccept('string');

// Execute filtering.
let values = ['foo', {}, 123].filter(acceptString);
console.log(values); // -> ['foo']
