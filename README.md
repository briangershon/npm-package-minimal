# npm-package-minimal

Example of publishing an NPM package to Github Packages via Github Actions.

## How to use this package in your own application

    # create your own personal github token with `repo` and `read:packages` scopes
    # and use it as your password in the next step:
    npm login --registry=https://npm.pkg.github.com --scope=@briangershon
    npm install @briangershon/npm-package-minimal

    # example of using this minimal npm module, in `server.js` add:
    const { helloWorld } = require('@briangershon/npm-package-minimal');
    console.log(helloWorld());

    # run it
    node server.js

## To release new version of this package

    npm version patch -s -m "my release"
    # `postversion` hook will then push to Github
    
    Create a release on Github.com to trigger publish action.
