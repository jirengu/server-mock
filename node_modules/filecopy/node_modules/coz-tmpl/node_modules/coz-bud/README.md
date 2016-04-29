coz-bud
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/coz-repo/coz-bud
[bd_travis_url]: http://travis-ci.org/coz-repo/coz-bud
[bd_travis_shield_url]: http://img.shields.io/travis/coz-repo/coz-bud.svg?style=flat
[bd_license_url]: https://github.com/coz-repo/coz-bud/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/coz-repo/coz-bud
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/coz-repo/coz-bud.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/coz-repo/coz-bud.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/coz-repo/coz-bud
[bd_gemnasium_shield_url]: https://gemnasium.com/coz-repo/coz-bud.svg
[bd_npm_url]: http://www.npmjs.org/package/coz-bud
[bd_npm_shield_url]: http://img.shields.io/npm/v/coz-bud.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/coz-bud.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

bud for coz

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
----

### Create a new bud.

```javascript
var bud = require('bud');

bud({

});
```

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/03.Spec.md.hbs" Start -->

<a name="section-doc-readme-03-spec-md"></a>
Specification
-------------


## Supported Properties

List of properties configurable in bud files.

| Name | Type | Default | Description |
| ----- | ----- | ----- | ----- |
| `` | string|object | &#x27;handlebars&#x27; | Template engine name or engine itself |
| `` | string | process.cwd() | Working directory path |
| `` | object |  | Data which template render with |
| `` | boolean | false | Make parent directories if needed |
| `` | object |  | Optional settings for template engine |
| `` | boolean | false | Should overwrite file when already exists, or not |
| `` | string|number | &#x27;644&#x27; | Permission of generated files. (eg., &#x27;444&#x27; for readonly files) |
| `` | string |  | Destination file path. If not provided, guess from bud file path |
| `` | string|function | &#x27;json&#x27; | Template file path or registered template name or template function |



<!-- Section from "doc/readme/03.Spec.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/coz-repo/coz-bud/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [coz](https://github.com/coz-repo/coz)

<!-- Links End -->
