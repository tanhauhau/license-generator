License generator
=================

> ***Forked from [license-generator](https://github.com/arshad/license-generator).***
> 
> The difference between the original module and this fork is in a [pending pull request](https://github.com/arshad/license-generator/pull/15) in which I feel it useful to me, if the PR is merged, by all means use the original awesome module from arshad.

Generates a license for your open source project. See [choosealicense.com](http://choosealicense.com).

![license-generator](https://cloud.githubusercontent.com/assets/124599/6750330/8b338cba-cf12-11e4-81c5-59af8c39787d.gif)

Installation
--------------
~~~bash
npm install license-generator #From origin
npm install tanhauhau/license-generator #From this fork
~~~
Usage
--------------

Generate a license

    $ license-generator install LICENSE -y YEAR -n FULLNAME -e EXTENSION

View a license

    $ license-generator view LICENSE

Options
--------------

    -y, --year The year to use. Example 2014.
    -n, --fullname The fullname to use in the license.
    -p --project The name of the project to use in the license.
    -e, --extension The file extension for the license. Example: txt. Defaults to no extension.


Or using API *[Pending PR #15](https://github.com/arshad/license-generator/pull/15)*
--------------
```javascript
var license = require('license-generator');
license.install({
    output: './LICENSE',
    license: 'MIT',
    year: 2016,
    fullname: 'your name',
    projectname: 'project name',
}, function(err){
    if(err) console.log(err);
});
```

Examples
--------------

    $ license-generator install mit -y 2014 -n "John Doe" -e txt
    $ license-generator view mit

Available licenses
--------------

    agpl
    apache
    artistic
    bsd-3-clause
    bsd
    cc0
    eclipse
    gpl-v2
    gpl-v3
    lgpl-v2.1
    lgpl-v3
    mit
    mozilla
    no-license
    unlicense
    wtfpl

License
--------------

The MIT License (MIT)

Copyright (c) 2014 Arshad Chummun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
