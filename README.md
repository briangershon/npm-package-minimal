# npm-package-minimal

Publish npm package to Github packages.

## How to use package

    npm login --registry=https://npm.pkg.github.com
    npm install @briangershon/npm-package-minimal

    # create tryit.js
    const { helloWorld } = require('@briangershon/npm-package-minimal');
    console.log(helloWorld());

## To release

    Create a release on Github.com to trigger publish action.