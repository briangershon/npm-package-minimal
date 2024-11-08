# npm-package-minimal

Example of publishing an NPM package to Github Packages via Github Actions.

This is useful for developing private packages you use internally and don't want to publish to the public NPM registry.

Features:

- Vite tooling
- Testing and code coverage via vitest
- TypeScript
- Publish as ESM
- Github Actions for testing and publishing package
- eslint and prettier for code formatting

## How to clone this repo for your own NPM module

This is a template, so you can clone the repo by clicking `Use this template` in Github.

Then make the following changes:

- in `package.json`:
  - update all the `@briangershon` to your account name
  - replace `npm-package-minimal` with the name of your repo. The `name` field is particularly important since this is needed for publishing your module. Name should have the format `@your-github-username/your-repo-name`.
  - reset your `version` to an initial value `0.0.0`. Note: You'll update this version when publishing package.
- update `LICENSE` file with your own name or license.
- update `README.md` with your own content.
- optional update `.prettierrc.json` or `eslint.config.js` with your own settings.

## How to `npm install` this package in your own application

Since this module is being deployed to the GitHub package repository (instead of the default NPM registry), you need to tell `npm` how to find the package.

First create your own personal github token with `repo` and `read:packages` scopes, which you'll use as your password in the next step.

Use your own `--scope` value instead of `@briangershon`.

```bash
npm login --registry=https://npm.pkg.github.com --scope=@briangershon
```

In your project, install this package like so:

```bash
npm install @briangershon/npm-package-minimal
```

## Run tests while developing this package

```bash
npm run test:watch
```

or without watch:

```bash
npm test
```

## Run while developing

```bash
npm run build:watch
```

## To release new version of this package

- for first time run, ensure your repo's GitHub Actions have the correct permissions to publish a package. Go to repo's `Settings > Actions > General > Workflow Permissions` and choose `Read and Write Permissions`.
- create a PR for your branch
- merge your PR to `main`
- on your local machine, run `git pull` to bring down latest `main` changes
- run `npm version patch -s -m "my release"` to bump the version number (`patch` can be replaced with `minor` or `major` versions), tag it, and push it to GitHub
- publish package on GitHub package registry by creating a Release on github.com to trigger publish action
