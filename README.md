# npm-package-minimal

Example of publishing an NPM package to Github Packages via Github Actions.

## How to fork this repo for your own NPM module

* This is a template, so you can clone the repo by clicking `Use this template` in Github.
* Change `package.json` and update all the `@briangershon` to your account name and replace `npm-package-minimal` with the name of your repo. The `name` field (in `package.json`) is particularly important since this is needed for publishing your module. Also reset your `version` to an initial value such as `0.0.1` or `1.0.0`.

## How to `npm install` module in your own application

Since this is not being published to the NPM registry, you need to tell `npm` how to access the package on Github Package Registry.

    # create your own personal github token with `repo` and `read:packages` scopes
    # and use it as your password in the next step:
    npm login --registry=https://npm.pkg.github.com --scope=@briangershon
    npm install @briangershon/npm-package-minimal

## To release new version of this package

    npm version patch -s -m "my release"
    # `postversion` hook will then push to Github
    
    Create a release on Github.com to trigger publish action.
