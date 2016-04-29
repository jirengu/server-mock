argx
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![bower version][bd_bower_badge_url]][bd_repo_url]

[bd_repo_url]: https://github.com/okunishinishi/node-argx
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-argx
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-argx.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-argx/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-argx
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-argx.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-argx.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-argx
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-argx.svg
[bd_npm_url]: http://www.npmjs.org/package/argx
[bd_npm_shield_url]: http://img.shields.io/npm/v/argx.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/argx.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Parse function arguments. Useful to implement variadic functions.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install argx --save
```
<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
-----

Pass the `arguments` object to `.argx()` inside your function.

```javascript
/**
 * This an example to declare an variadic functions.
 */

var argx = require('argx');

function doSomething(values, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || function noop(){}; // Consume last argument if it's a function.
    options = args.pop('object') || {}; // Consume last argument if it's an object.
    values = args.remain(); // Get remaining arguments as array.
    /*...*/
}

doSomething('foo', 'bar');
doSomething('foo', 'bar', {verbose:true});
doSomething('foo', 'bar', function(err){});
doSomething('foo', 'bar', {verbose:true}, function(err){});
````

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/03.API Guide.md.hbs" Start -->

<a name="section-doc-readme-03-a-p-i-guide-md"></a>
API Guide
-----

API guide for Argx instance, which is returned by `argx(arguments)`.

| Signature | Description | Example
| ----- | ----- | --- |
| **.pop()** | Pop an argument value from last. | args.pop() |
| **.pop(count)** | Pop multiple values from last. Orders are preserved. | args.pop(1) |
| **.pop(type)** | Pop only if the last value conform the type. | args.pop("number") <br/> args.pop("number&#124;string") <br/> args.pop(CustomObj) |
| **.pop(count, type)** | Pop values while conforming the type. | args.pop(2, "number") <br/> args.pop(1, CustomObj) |
| **.shift()** | Shift an argument value from top. | args.shift() |
| **.shift(count)** | Shift multiple values from top. | args.shift(2) |
| **.shift(type)** | Shift only if the top value conform the type. | args.shift("string") <br/> args.pop("object&#124;string") <br/> args.shift(CustomObj) |
| **.shift(count, type)** | Shift values while conforming the type. | args.shift(2, "string") <br/> args.shift(4, CustomObj) |
| **.remain()** | Shift all remained values. Always returns an array. | args.remain() |

<!-- Section from "doc/readme/03.API Guide.md.hbs" End -->

<!-- Section from "doc/readme/04.Tips.md.hbs" Start -->

<a name="section-doc-readme-04-tips-md"></a>
Tips
-----

### Detecting Custom Types.

Type which `.pop()`/`.shift()` accept is string, a custom object or a custom constructor.

```javascript
function MyConstructor(){/*...*/};
args.pop(MyConstructor); // Pop only if the last argument is instantiate by `new MyConstructor()`

var MyObj = {/*...*/};
args.pop(MyObj); // Pop only if the last argument is create by `Object.create(MyObj)`
```

### Specify Multiple Types

There are two ways to specify 'or' condition for types.

1. Passing string joined by "|" (eg: `args.pop('string|number');` )
2. Passing array as type (eg: `args.pop(['string', MyCustomObj]);` )


### Want Array Always

Note that `.pop()`/`.shift()` methods returns values as array **only when multiple entries hit**.
If you want to make sure to keep values as array, use `[].concat()`.

```javascript
var args = argx(arguments);
var values = [].concat(args.pop(2, 'string') || []); // Always array.
```

<!-- Section from "doc/readme/04.Tips.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-argx/blob/master/LICENSE).

<!-- LICENSE End -->


