# The React Codebase for Fertile Crescent Website [WIP]

This repo is the MVP front-end for Fertile Crescent Website

# Installation Prerequisite

Install the following _the way_ it is being instructed:
- [NVM](https://github.com/creationix/nvm#install-script)
- [Git](https://www.atlassian.com/git/tutorials/install-git#homebrew)
- [Yarn](https://yarnpkg.com/lang/en/docs/install). **Do NOT** run `brew install yarn`. Instad, under `Alternatives`, follow the shell script that installs via `curl`.

Once done, you can clone the repo. Now, `cd` into the directory and run

```bash
$ nvm install # installs version of Node from .nvmrc
$ nvm use
```

This would ensure you are always on correct version. You might also want to install `nvm-auto-use` plugin for `zsh`.

# Running the app

Run the `start` script:
```bash
$ yarn start # invokes webpack-dev-server
```

And visit `localhost:8080` in your browser.
