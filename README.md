# No-Sweat™ ESLint, Prettier and TypeScript setup for React

> WIP - rules may change often until I find the settings that I enjoy working with.

These are my settings for ESLint and Prettier targeting React with TypeScript.

You might like them - or you might not. Don't worry you can always change them.

## What it does

- Lints JavaScript and TypeScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes inside of html script tags
- Lints + Fixes React via eslint-config-airbnb
- You can see all the [rules here](./.eslintrc.js). You are very welcome to overwrite any of these settings, or just fork the entire thing to create your own.

## Installing

You can use eslint globally and/or locally per project.

It's usually best to install this locally once per project, that way you can have project specific settings as well as sync those settings with others working on your project via git.

I also install globally so that any project or rogue JS/TS file I write will have linting and formatting applied without having to go through the setup. You might disagree and that is okay, just don't do it then 😃.

## Staying up-to-date

You can [watch the repo (releases only) on github](https://github.com/@lani78/eslint-config/watchers) to get notified once I release a new version! 🚀

## Local / Per project install

```sh
npm init -y                                             # Create 'package.json' if you haven't already
npx install-peerdeps --dev @lani78/eslint-config        # Install everything needed by the config
                                                        # You can see in your package.json there's now a big list of devDependencies
touch .eslintrc.js                                      # Create the config file @ the project's root
```

Your `.eslintrc.js` file should look like this:

```js
module.exports = {
  extends: ['@lani78']
};
```

> Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig": { ... }`. This makes one less file in your project.

You can add these two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "    eslint . --cache --ext js,jsx,ts,tsx",
  "lint:fix": "eslint . --cache --ext js,jsx,ts,tsx --fix",
},
```

Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Global Install

1. First install everything needed:

```sh
npx install-peerdeps --global @lani78/eslint-config
```

(**note:** npx is not a spelling mistake of **npm**. `npx` comes with when `node` and `npm` are installed and makes script running easier 😃)

2. Then you need to make a global `.eslintrc.js` / `.eslintrc` file:

ESLint will look for one in your home directory

- `~/.eslintrc[.js]` for UNIX
- `C:\Users\<username>\.eslintrc[.js]` for Windows

Your `.eslintrc.js` file should look like this:

```js
module.exports = {
  extends: ['@lani78']
};
```

3. To use from the CLI, you can now run `eslint .` or configure your editor as we show next.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc[.js]` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [prettier options](https://prettier.io/docs/en/options.html) go under `"prettier/prettier"`. Note that prettier rules overwrite anything in my config (trailing comma, and single quote), so you'll need to include those as well.

```js
module.exports = {
  extends: ['@lani78'],
  rules: {
    'no-console': 2,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        arrowParens: 'always'
      }
    ]
  }
};
```

## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },

  "eslint.enable": true,
  // onType will give you formatting errors while you type :(
  "eslint.run": "onSave",
  // work as a formatter, too!
  "eslint.format.enable": true,
  // Enable VS Code task to lint all files in the project! Currently doesn't work with GIT Bash on Windows :(
  "eslint.lintTask.enable": true,
  "eslint.lintTask.options": ". --cache --ext js,jsx,ts,tsx --fix",

  // Turn formatting off for JS, JSX, TS & TSX - ESLint IS the formatter now! (Prettier is still in the picture, as we have configured it via eslint)
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },

  // Optional but IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through eslint already.
  "prettier.disableLanguages": ["javascript", "javascriptreact", "typescript", "typescriptreact"],

  // Use the projects locally installed version of typescript
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

See also [the README of vscode-eslint](https://github.com/microsoft/vscode-eslint/blob/master/README.md).

## With Create React App

1. Run `npx install-peerdeps @lani78/eslint-config --dev`
1. Crack open your `package.json` and
   1. replace `"extends": "react-app"` with `"extends": "@lani78"`
   1. replace `"eslint": "5.x"` with `"eslint": "6.x"` like so: `npm i eslint@6.x`, or replace yourself & run `npm i` 1. verify that eslint's version is `6.x.y`: run `node node_modules/.bin/eslint --version`
   1. if you're using typescript, append `--ext js,jsx,ts,tsx` every time you call `eslint` (required for eslint `6.x`, see https://github.com/sarpik/eslint-config-sarpik/issues/4)

Your `package.json` should have this:

```json
{
  "scripts": {
    "lint": "    eslint ./src --cache --ext js,jsx,ts,tsx",
    "lint:fix": "eslint ./src --cache --ext js,jsx,ts,tsx --fix"
  },
  "eslintConfig": {
    "extends": "@lani78"
  },
  "devDependencies": {
    "eslint": "6.x"
  }
}
```

Example repo with commits as setting up steps: https://github.com/sarpik/cra-eslint-ts

## 🤬🤬🤬🤬 IT'S NOT WORKING

Start fresh. Sometimes global modules can goof you up. This will remove them all:

```
npm remove --global @lani78/eslint-config @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript eslint eslint-config-prettier eslint-config-airbnb eslint-plugin-html eslint-plugin-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier eslint-plugin-react-hooks
```

To do the above for local, omit the `--global` flag.

Then if you are using a local install, remove your `package-lock.json` / `yarn.lock` file and delete the `node_modules/` directory.

```sh
rm package-lock.json
rm yarn.lock
rm -rf node_modules
```

Then follow the above instructions again.

## License

[MIT](./LICENSE) © 2020-2077 [Niklas Lagergren](https://github.com/@lani78)

## Acknowledgements

- [Wes Bos](https://github.com/wesbos) for creating the [original No-Sweat eslint config](https://github.com/wesbos/eslint-config-wesbos) with this amazing README!
- [Kipras Melnikovas](https://github.com/sarpik) for creating the [TypeScript fork](https://github.com/sarpik/eslint-config-sarpik).
