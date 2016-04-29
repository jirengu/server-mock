var arrayreduce = require('arrayreduce');

// Define a reducing function.
var booleanOr = arrayreduce.booleanOr();

// Execute sorting.
var result = [true, false, true].reduce(booleanOr, true);
console.log(result); // -> true
