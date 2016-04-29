var iftype = require('iftype');

//----------------------------
// Check if type is string
//----------------------------
iftype(123).is('string'); // => false
iftype(function foo(){}).is('string'); // => false
iftype(["foo", "bar"]).is('string'); // => false
iftype("bar").is('string'); // => true
iftype(null).is('string'); // => false
iftype(undefined).is('string'); // => false


//----------------------------
// Check if type is number
//----------------------------
iftype(123).is('number'); // => true
iftype(function foo(){}).is('number'); // => false
iftype(["foo", "bar"]).is('number'); // => false
iftype("bar").is('number'); // => false
iftype(null).is('number'); // => false
iftype(undefined).is('number'); // => false


//----------------------------
// Check if type is object
//----------------------------
iftype(123).is('object'); // => false
iftype(function foo(){}).is('object'); // => false
iftype(["foo", "bar"]).is('object'); // => true
iftype("bar").is('object'); // => false
iftype(null).is('object'); // => false
iftype(undefined).is('object'); // => false


//----------------------------
// Check if type is array
//----------------------------
iftype(123).is('array'); // => false
iftype(function foo(){}).is('array'); // => false
iftype(["foo", "bar"]).is('array'); // => true
iftype("bar").is('array'); // => false
iftype(null).is('array'); // => false
iftype(undefined).is('array'); // => false


//----------------------------
// Check if type is function
//----------------------------
iftype(123).is('function'); // => false
iftype(function foo(){}).is('function'); // => true
iftype(["foo", "bar"]).is('function'); // => false
iftype("bar").is('function'); // => false
iftype(null).is('function'); // => false
iftype(undefined).is('function'); // => false


