"use strict";

const arrayfilter = require('arrayfilter');

// Define a filter function.
let acceptFo = arrayfilter.patternAccept(/^fo/);

// Execute filtering.
let values = ['foo', 'bar', 'baz'].filter(acceptFo);
console.log(values); // -> ['foo']
