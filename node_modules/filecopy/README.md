filecopy
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-filecopy
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-filecopy
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-filecopy.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-filecopy/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-filecopy
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-filecopy.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-filecopy.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-filecopy
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-filecopy.svg
[bd_npm_url]: http://www.npmjs.org/package/filecopy
[bd_npm_shield_url]: http://img.shields.io/npm/v/filecopy.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/filecopy.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Copy files.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install filecopy --save
```
<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
----

### Copy a Single File

```javascript
#!/usr/bin/env/node

var filecopy = require('filecopy');

filecopy('src/some-text01.txt', 'dest/some-text01-copy.txt', {
    mkdirp: true
}, function(err){
    /*...*/
});

```

### Copy Multiple Files

```javascript
#!/usr/bin/env node

var filecopy = require('filecopy');

// Copy all files in src directory to dir.
filecopy('src/*.txt', 'dest', {}, function (err) {
    /*...*/
});

```

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-filecopy/blob/master/LICENSE).

<!-- LICENSE End -->


