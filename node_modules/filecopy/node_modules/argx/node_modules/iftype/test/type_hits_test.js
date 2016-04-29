/**
 * Test case for typeHits.
 * Runs with nodeunit.
 */

var typeHits = require('../lib/type/type_hits.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Type hits'] = function (test) {
    var num1 = 0,
        str1 = '',
        str2 = 'foo',
        obj1 = {},
        obj2 = Object.create(obj1),
        Func = function () {
        },
        func = new Func();

    // Check numbers
    test.equal(typeHits(num1, 'number'), true);
    test.equal(typeHits(num1, 'string'), false);
    test.equal(typeHits(num1, 'function'), false);
    test.equal(typeHits(num1, 'object'), false);
    test.equal(typeHits(num1, obj1), false);
    test.equal(typeHits(num1, obj2), false);
    test.equal(typeHits(num1, Func), false);
    test.equal(typeHits(num1, null), false);
    test.equal(typeHits(num1, undefined), false);

    // Check empty string.
    test.equal(typeHits(str1, 'number'), false);
    test.equal(typeHits(str1, 'string'), true);
    test.equal(typeHits(str1, 'function'), false);
    test.equal(typeHits(str1, 'object'), false);
    test.equal(typeHits(str1, obj1), false);
    test.equal(typeHits(str1, obj2), false);
    test.equal(typeHits(str1, Func), false);
    test.equal(typeHits(str1, null), false);
    test.equal(typeHits(str1, undefined), false);

    // Check string.
    test.equal(typeHits(str2, 'number'), false);
    test.equal(typeHits(str2, 'string'), true);
    test.equal(typeHits(str2, 'function'), false);
    test.equal(typeHits(str2, 'object'), false);
    test.equal(typeHits(str2, obj1), false);
    test.equal(typeHits(str2, obj2), false);
    test.equal(typeHits(str2, Func), false);
    test.equal(typeHits(str2, null), false);
    test.equal(typeHits(str2, undefined), false);

    // Check object.
    test.equal(typeHits(obj1, 'number'), false);
    test.equal(typeHits(obj1, 'string'), false);
    test.equal(typeHits(obj1, 'function'), false);
    test.equal(typeHits(obj1, 'object'), true);
    test.equal(typeHits(obj1, obj1), false);
    test.equal(typeHits(obj1, obj2), false);
    test.equal(typeHits(obj1, Func), false);
    test.equal(typeHits(obj1, null), false);
    test.equal(typeHits(obj1, undefined), false);

    // Check object inheritance.
    test.equal(typeHits(obj2, 'number'), false);
    test.equal(typeHits(obj2, 'string'), false);
    test.equal(typeHits(obj2, 'function'), false);
    test.equal(typeHits(obj2, 'object'), true);
    test.equal(typeHits(obj2, obj1), true); // Hit by `isPrototypeOf`
    test.equal(typeHits(obj2, obj2), false);
    test.equal(typeHits(obj2, Func), false);
    test.equal(typeHits(obj2, null), false);
    test.equal(typeHits(obj2, undefined), false);

    // Check function.
    test.equal(typeHits(Func, 'number'), false);
    test.equal(typeHits(Func, 'string'), false);
    test.equal(typeHits(Func, 'function'), true);
    test.equal(typeHits(Func, 'object'), false);
    test.equal(typeHits(Func, obj1), false);
    test.equal(typeHits(Func, obj2), false);
    test.equal(typeHits(Func, Func), false);
    test.equal(typeHits(Func, func), false);
    test.equal(typeHits(Func, null), false);
    test.equal(typeHits(Func, undefined), false);

    // Check function inheritance.
    test.equal(typeHits(func, 'number'), false);
    test.equal(typeHits(func, 'string'), false);
    test.equal(typeHits(func, 'function'), false);
    test.equal(typeHits(func, 'object'), true);
    test.equal(typeHits(func, obj1), false);
    test.equal(typeHits(func, obj2), false);
    test.equal(typeHits(func, Func), true); // Hit by `instanceof`
    test.equal(typeHits(func, func), false);
    test.equal(typeHits(func, null), false);
    test.equal(typeHits(func, undefined), false);

    test.done();
};


exports['Hit with multiple type.'] = function (test) {
    function MyFunc() {
    }

    test.equal(typeHits("foo", "string|number|object"), true);
    test.equal(typeHits("foo", "string|function|object"), true);
    test.equal(typeHits("foo", "function|number|object"), false);
    test.equal(typeHits("foo", ["string", "number|object"]), true);
    test.equal(typeHits("foo", ["string|object", "function"]), true);
    test.equal(typeHits("foo", ["function", "number"]), false);
    test.equal(typeHits(new MyFunc, [MyFunc, "number"]), true);

    test.done();
};
