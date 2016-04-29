/**
 * Test for argx.
 * Runs with nodeunit.
 */

"use strict";


var argx = require('../lib');

function noop() {
}

exports['Pop arguments.'] = function (test) {
    (function foo() {
        var args = argx(arguments);
        test.ok(args.pop('function'));
        test.ok(args.pop(1, 'object'));
        test.deepEqual(args.remain(), ['v1', 'v2']);
    })('v1', 'v2', {}, noop);

    (function foo2() {
        var args = argx(arguments);
        test.strictEqual(args.pop('function'), undefined);
        test.deepEqual(args.pop(1, 'object'), {foo: 'bar'});
        test.deepEqual(args.remain(), ['v1', 'v2']);
    })('v1', 'v2', {foo: 'bar'});

    (function foo4() {
        var args = argx(arguments);
        test.strictEqual(args.pop('function'), undefined);
        test.strictEqual(args.pop("1", 'object'), undefined);
        test.deepEqual(args.remain(), ['v1', 'v2']);
    })('v1', 'v2');

    (function foo4() {
        var args = argx(arguments);
        test.deepEqual(args.pop(2), ["v4", "v5"]);
        test.deepEqual(args.remain(), ['v1', 'v2', 'v3']);
    })('v1', 'v2', 'v3', 'v4', 'v5');

    test.done();
};

exports['Shift arguments.'] = function (test) {
    (function foo() {
        var args = argx(arguments);
        test.deepEqual(args.shift(2), ['v1', 'v2']);
        test.equal(args.shift(1, 'function'), undefined);
        test.deepEqual(args.remain(), [{}, noop]);
        test.equal(args.shift(), undefined);
        test.equal(args.shift(124), undefined);
    })('v1', 'v2', {}, noop);

    (function foo2() {
        var args = argx(arguments);
        test.deepEqual(args.shift(2), ['v1', 'v2']);
        test.deepEqual(args.remain(), ['v3', 'v4', 'v5']);
    })('v1', 'v2', 'v3', 'v4', 'v5');

    test.done();
};

exports['Use noop.'] = function (test) {
    test.ifError(argx.noop());
    test.done();
};


exports['Hit with multiple type.'] = function (test) {
    function MyFunc() {
    }

    var myFunc = new MyFunc;
    (function () {
        var args = argx(arguments);

        test.strictEqual(args.pop('string|number'), undefined);
        test.strictEqual(args.pop(['string', 'number']), undefined);
        test.strictEqual(args.pop([MyFunc, 'number']), myFunc);
        test.strictEqual(args.shift([MyFunc, 'number']), undefined);
        test.strictEqual(args.shift(['string', 'number']), 'v1');
        test.strictEqual(args.shift('string|number'), 'v2');

    })('v1', 'v2', myFunc);
    test.done();
};

exports['Working with custom object.'] = function (test) {
    var CustomError = function (name) {
        this.name = name;
    };
    CustomError.prototype = Object.create(Error.prototype);

    (function acceptCustom() {
        var args = argx(arguments);
        var fn = args.shift(Function);
        test.equal(fn.name, 'func01');
        var error = args.shift(CustomError);
        test.equal(error.name, 'err01');
        var obj = args.pop(Object);
        test.equal(obj.name, 'obj01');
    })(
        function func01() {
        },
        new CustomError('err01'),
        {name: 'obj01'}
    );

    (function rejectCustom() {
        var args = argx(arguments);
        test.ok(!args.pop(Function));
        test.ok(!args.pop(CustomError));
        test.ok(!args.pop('number'));
        test.ok(!args.pop('string'));
        test.ok(!args.shift("object"));
        test.ok(!args.shift('number'));
        test.ok(!args.shift('string'));
    })(
        function func01() {
        },
        new CustomError('err01'),
        {name: 'obj01'}
    );
    test.done();
};

exports['Handle array.'] = function (test) {
    (function () {
        var args = argx(arguments);
        test.equal(args.pop('string'), undefined);
        test.equal(args.pop([]), undefined);
        test.deepEqual(args.pop('array'), ['v5', 'v6']);
        test.equal(args.pop([]), undefined);
        test.equal(args.pop('string'), undefined);
        test.deepEqual(args.pop(Array), ['v4', 'v5']);
    })(
        'v1',
        'v2',
        'v3',
        ['v4', 'v5'],
        ['v5', 'v6']
    );
    test.done();
};

exports['Handle arrays.'] = function (test) {
    (function () {
        var args = argx(arguments);
        test.deepEqual(args.shift("string"), undefined);
    })(["foo", "bar"]);
    (function () {
        var args = argx(arguments);
        test.deepEqual(args.shift("array"), ["foo", "bar"]);
    })(["foo", "bar"]);
    (function () {
        var args = argx(arguments);
        test.deepEqual(args.shift("object"), ["foo", "bar"]);
    })(["foo", "bar"]);
    (function () {
        var args = argx(arguments);
        test.deepEqual(args.shift(Array), ["foo", "bar"]);
    })(["foo", "bar"]);
    test.done();
};


exports['Parse type.'] = function (test) {

    (function () {
        var args = argx(arguments);
        test.strictEqual(args.pop(Function), undefined);
        test.deepEqual(args.pop(Object), {foo: 'bar'});
        test.strictEqual(args.pop(Function), argx.noop);
        test.strictEqual(args.shift(Number), undefined);
        test.equal(args.shift(String), 'foo');
        test.strictEqual(args.shift(Number), 3);
        test.deepEqual(args.shift(Array), ["baz"]);
        test.strictEqual(args.shift(Array), undefined);
    })("foo", 3, ["baz"], argx.noop, {foo: 'bar'});
    test.done();
};

exports['Issus #3'] = function (test) {
    // Test for issue #3 (https://github.com/okunishinishi/node-argx/issues/3)
    function argxGetNumberType(fn, string, number) {
        var args = argx(arguments);
        var values = {};
        values.fn = args.shift(Function);
        test.strictEqual(args.shift(Function), undefined);
        test.strictEqual(args.pop(Function), undefined);
        values.str = args.shift(String);
        test.strictEqual(args.shift(String), undefined);
        test.strictEqual(args.pop(String), undefined);
        values.numb = args.shift(Number);
        test.strictEqual(args.shift(Number), undefined);
        test.strictEqual(args.pop(Number), undefined);
        test.deepEqual(args.remain(), []);
        test.deepEqual(values, {
            fn: argxGetNumberType,
            str: 'hello',
            numb: 3
        })
    }

    argxGetNumberType(argxGetNumberType, "hello", 3);
    test.done();
};