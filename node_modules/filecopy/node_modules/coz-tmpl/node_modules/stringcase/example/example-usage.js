var stringcase = require('stringcase');

//------------------------
// Convert to camelcase
//------------------------
stringcase.camelcase('foo_bar'); // => "fooBar"
stringcase.camelcase('FOO_BAR'); // => "fooBar"
stringcase.camelcase('fooBar'); // => "fooBar"
stringcase.camelcase('FooBar'); // => "fooBar"


//------------------------
// Convert to capitalcase
//------------------------
stringcase.capitalcase('foo_bar'); // => "Foo_bar"
stringcase.capitalcase('FOO_BAR'); // => "FOO_BAR"
stringcase.capitalcase('fooBar'); // => "FooBar"
stringcase.capitalcase('FooBar'); // => "FooBar"


//------------------------
// Convert to constcase
//------------------------
stringcase.constcase('foo_bar'); // => "FOO_BAR"
stringcase.constcase('FOO_BAR'); // => "FOO_BAR"
stringcase.constcase('fooBar'); // => "FOO_BAR"
stringcase.constcase('FooBar'); // => "FOO_BAR"


//------------------------
// Convert to decapitalcase
//------------------------
stringcase.decapitalcase('foo_bar'); // => "foo_bar"
stringcase.decapitalcase('FOO_BAR'); // => "fOO_BAR"
stringcase.decapitalcase('fooBar'); // => "fooBar"
stringcase.decapitalcase('FooBar'); // => "fooBar"


//------------------------
// Convert to enumcase
//------------------------
stringcase.enumcase('foo_bar'); // => "foo:bar"
stringcase.enumcase('FOO_BAR'); // => "foo:bar"
stringcase.enumcase('fooBar'); // => "foo:bar"
stringcase.enumcase('FooBar'); // => "foo:bar"


//------------------------
// Convert to lowercase
//------------------------
stringcase.lowercase('foo_bar'); // => "foo_bar"
stringcase.lowercase('FOO_BAR'); // => "foo_bar"
stringcase.lowercase('fooBar'); // => "foobar"
stringcase.lowercase('FooBar'); // => "foobar"


//------------------------
// Convert to pascalcase
//------------------------
stringcase.pascalcase('foo_bar'); // => "FooBar"
stringcase.pascalcase('FOO_BAR'); // => "FooBar"
stringcase.pascalcase('fooBar'); // => "FooBar"
stringcase.pascalcase('FooBar'); // => "FooBar"


//------------------------
// Convert to pathcase
//------------------------
stringcase.pathcase('foo_bar'); // => "foo/bar"
stringcase.pathcase('FOO_BAR'); // => "foo/bar"
stringcase.pathcase('fooBar'); // => "foo/bar"
stringcase.pathcase('FooBar'); // => "foo/bar"


//------------------------
// Convert to sentencecase
//------------------------
stringcase.sentencecase('foo_bar'); // => "Foo bar"
stringcase.sentencecase('FOO_BAR'); // => "Foo bar"
stringcase.sentencecase('fooBar'); // => "Foo bar"
stringcase.sentencecase('FooBar'); // => "Foo bar"


//------------------------
// Convert to snakecase
//------------------------
stringcase.snakecase('foo_bar'); // => "foo_bar"
stringcase.snakecase('FOO_BAR'); // => "foo_bar"
stringcase.snakecase('fooBar'); // => "foo_bar"
stringcase.snakecase('FooBar'); // => "foo_bar"


//------------------------
// Convert to spacecase
//------------------------
stringcase.spacecase('foo_bar'); // => "foo bar"
stringcase.spacecase('FOO_BAR'); // => "foo bar"
stringcase.spacecase('fooBar'); // => "foo bar"
stringcase.spacecase('FooBar'); // => "foo bar"


//------------------------
// Convert to spinalcase
//------------------------
stringcase.spinalcase('foo_bar'); // => "foo-bar"
stringcase.spinalcase('FOO_BAR'); // => "foo-bar"
stringcase.spinalcase('fooBar'); // => "foo-bar"
stringcase.spinalcase('FooBar'); // => "foo-bar"


//------------------------
// Convert to titlecase
//------------------------
stringcase.titlecase('foo_bar'); // => "Foo Bar"
stringcase.titlecase('FOO_BAR'); // => "Foo Bar"
stringcase.titlecase('fooBar'); // => "Foo Bar"
stringcase.titlecase('FooBar'); // => "Foo Bar"


//------------------------
// Convert to trimcase
//------------------------
stringcase.trimcase('foo_bar'); // => "foo_bar"
stringcase.trimcase('FOO_BAR'); // => "FOO_BAR"
stringcase.trimcase('fooBar'); // => "fooBar"
stringcase.trimcase('FooBar'); // => "FooBar"


//------------------------
// Convert to uppercase
//------------------------
stringcase.uppercase('foo_bar'); // => "FOO_BAR"
stringcase.uppercase('FOO_BAR'); // => "FOO_BAR"
stringcase.uppercase('fooBar'); // => "FOOBAR"
stringcase.uppercase('FooBar'); // => "FOOBAR"


