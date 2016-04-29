var arrayreduce = require('arrayreduce');

// Define a reducing function.
var booleanAnd = arrayreduce.booleanAnd();

// Execute sorting.
var result = [true, false, true].reduce(booleanAnd, true);
console.log(result); // -> false
