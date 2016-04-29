"use strict";

const arraysort = require('arraysort');

// Define a sort function.
let stringAsc = arraysort.stringCompare(),
    stringDesc = arraysort.stringCompare({desc: true});

// Execute sorting.
let values = ['foo', 'bar', 'baz'];
values = values.sort(stringAsc); // -> ['foo', 'baz', 'bar']
values = values.sort(stringDesc); // -> ['bar', 'baz', 'foo']
