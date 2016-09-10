# build-path [![Build status for build-path on Circle CI.](https://img.shields.io/circleci/project/sholladay/build-path/master.svg "Circle Build Status")](https://circleci.com/gh/sholladay/build-path "Build Path Builds")

> Get a path for the given build.

## Why?

 - Asserts that all necessary metadata is present.
 - Uses relative paths for flexibility.
 - Platform and technology agnostic.

## Install

```sh
npm install build-path --save
```

## Usage

Get it into your program.

```js
const buildPath = require('build-path');
```

Get the path where a given build should live.

```js
const path = buildPath({
    branch : 'master',
    version : '1.0.0'
});

console.log(path);  // => build/master/1.0.0
```

Build paths cannot be constructed with incomplete data.

```js
buildPath({ version : '1.0.0' });
// TypeError: A branch is required to create the build path.
```

## API

### buildPath(option)

#### option

Type: `object`

[Build data](https://github.com/sholladay/build-data).

##### branch

Type: `string`

The branch name of the build.

##### version

Type: `string`

The version of the build.

## Related

 - [delivr](https://github.com/sholladay/delivr) - Build your code and ship it to S3.
 - [build-files](https://github.com/sholladay/build-files) - Read the files from your build.
 - [build-keys](https://github.com/sholladay/build-keys) - Get the paths of files from your build.
 - [build-dir](https://github.com/sholladay/build-dir) - Get a place to put your build.
 - [build-data](https://github.com/sholladay/build-data) - Get metadata for your build.
 - [build-version](https://github.com/sholladay/build-version) - Get a version for your build.

## Contributing

See our [contributing guidelines](https://github.com/sholladay/build-path/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/build-path/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/build-path/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/build-path/blob/master/LICENSE "The license for build-path.") © [Seth Holladay](http://seth-holladay.com "Author of build-path.")

Go make something, dang it.
