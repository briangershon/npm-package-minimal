# npm-package-minimal

Publish npm package to Github packages.

## How to install and use package in your application

    # create your own personal github token with `repo` and `read:packages` scopes
    # and use it as your password in the next step:
    npm login --registry=https://npm.pkg.github.com --scope=@briangershon
    npm install @briangershon/npm-package-minimal

    # create server.js
    const { helloWorld } = require('@briangershon/npm-package-minimal');
    console.log(helloWorld());

    # run it
    node server.js

## To release new version of this package

    npm version patch -s -m "my release"
    # `postversion` hook will then push to Github
    
    Create a release on Github.com to trigger publish action.