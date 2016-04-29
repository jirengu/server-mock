var arrayreduce = require('arrayreduce');

// Define a reducing function.
var arrayConcat = arrayreduce.arrayConcat();

// Execute sorting.
var values = ['foo', ['bar', 'baz']].reduce(arrayConcat, []);
console.log(values); // -> ['foo', 'baz', 'bar']
