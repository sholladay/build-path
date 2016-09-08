'use strict';

const path = require('path');

const buildPath = (option) => {
    const config = Object.assign({}, option);
    const { branch, version } = config;

    if (!branch) {
        throw new TypeError('A branch is required to create the build path.');
    }
    if (!version) {
        throw new TypeError('A version is required to create the build path');
    }

    return path.join('build', branch, version);
};

module.exports = buildPath;
