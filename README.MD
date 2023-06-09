# React with webpack from scratch

This is a demo project which contains all necessary dependencies for a 0-1 react project.
Though we have create-react-app or other CLI for react app to serve, build, however from scracth could learn dive deep about the knowledge behind the sence.

## Github

[x] git init  
-- [x] could push first version to github or not  
[x] [husky](https://www.npmjs.com/package/husky)

- Make sure somebody make any commit the code
  [x] create .nvmrc file  
  [x] Add node version info add package.json engines fields  
  [x] Create reprository at github  
  [x] Create .gitignore file
  [x] .browserslistrc

[x] npm init -y

## [Babel](https://babeljs.io/) config

[x] install babel devDependencies

> @babel/core  
>  @babel/preset-react (for .babelrc)  
>  babel-loader (for webpack)  
>  [x] config .babelrc [babelrc present info](https://babeljs.io/docs/presets)

## [Webpack](https://webpack.js.org/) config

[x] install webpack webpack-cli devDependencies
[x] config webpack.config.js
[x] set output
[x] set devServer
[x] set module
[x] load images

[x] set scss rules
[x] set babel-loader rules (for reactjs, need to config .babelrc file)

[x] [html webpack plugin](https://webpack.js.org/plugins/html-webpack-plugin/#root) and clean  
 `npm i -D html-webpack-pulgin`

> [x] webpack.config.js config the plugin
> [x] create the index.html template
> [x] enhance the bundle file inject to index.html
> [x] clean build before build
> [x] cache the file

### Webpack performance

[x] mini-css-extract-plugin

> This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.  
> It builds on top of a new webpack v5 feature and requires webpack 5 to work.
> [x] Add main.css to index.html

This is enhance the css, example, it has some fallback style for the css, example, --text: red, finally, there is a fallback style, color: red; color: var(--text)

> [x] [postcss](https://postcss.org/)  
> [x] postcss-preset-env(for .postcssrc)
> [x] postcss-loader (for webpack.config.js)

## [Prettier](https://prettier.io/)

PS: this is really need for the whole team otherwise, push codes might messup

[x] Install  
[x] Add script at package.json  
[x] .prettierrc
[x] VSC plugin

- VSC plugin
  prettier -> setting -> json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

## [Typescript](https://www.typescriptlang.org/)

Now the TS only type check, as webpack babel will control the compiler

[x] `npm i --save-dev typescript`  
[x] Update package.json  
[x] Configure tsconfig.json  
[x] `npm install --save-dev @babel/preset-typescript` this is for ./.babelrc

Below 2 npms are for eslint to check ts,  
after installed, need update script 'lint' with '--ext .js,.ts.,tsx'  
[x] [`npm i --save-d @typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

- An ESLint plugin which provides lint rules for TypeScript codebases.

[x] [`npm i --save-d @typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

- An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.  
  [x] Add '--ext .js,.ts.,tsx' to package.json script.lint  
  [x] Update .eslintrc with overrides

## [React](https://react.dev/)

[x] .babelrc `["@babel/preset-react", {"runtime": "automatic"}]`  
[x] install react and react-dom for react  
[x] create index.js  
----[x] required the html  
[x] create index.html  
----[x] put div#root  
----[x] put webpack output file name to script  
[x] prop-types

[x] React ESlints  
----[x] npm init @eslint/config (lists of options for choose) [more info](https://eslint.org/)  
----[x] npm install eslint-plugin-react-hooks --save-dev
[x] Fixed the issues after config

## Test

[] [Jest](https://jestjs.io/)  
[] [React Testing Library](https://testing-library.com/)

## package.json config

[x] update package.json  
----[x] build script  
----[x] serve script

## CICD

[x] create yaml file .github\workflows\deployToPage.yaml  
[x] install devDependencies gh-pages  
[x] update package.js homepage  
[x] update package.js deploy script  
[x] create a token https://github.com/settings/tokens  
[x] create a env variable at https://github.com/{yourname}/{repro}/settings/secrets/actions and paste the value from last step token

## TODO

Prettier might have some confit with eslint
[x] use eslint-config-prettier for eslintrc extends

[] `npm run build` show below error
[] husky ensure pre-commit, everybody at the same page, not work still
[] separated webpack files for common, dev, prop.

=============

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.1.0

YOUR TYPESCRIPT VERSION: 5.1.3

Please only submit bug reports when using the officially supported version.

=============
