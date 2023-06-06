# React with webpack from scratch

[x] npm init -y  
[x] git init  

## Babel config

[x] install babel devDependencies 
> @babel/core  
  @babel/preset-react  (for .babelrc)  
  babel-loader (for webpack)  
  [x] config .babelrc [babelrc present info](https://babeljs.io/docs/presets)  

## Webpack config

[x]  install webpack webpack-cli devDependencies
  [x] config webpack.config.js
    [x] set output
    [x] set devServer
    [x] set module
      [x] set babel-loader rules
      [x] set scss rules

### Webpack performance

[x] mini-css-extract-plugin  
>This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.  
It builds on top of a new webpack v5 feature and requires webpack 5 to work.
  [x] Add main.css to index.html

## React

[x] install react and react-dom for react
[x] create index.js  
  [x] required the html  
[x] create index.html  
  [x] put div#root  
  [x] put webpack output file name to script  
[x] prop-types

[x] React ESlints  
  [x] npm init @eslint/config (lists of options for choose) [more info](https://eslint.org/)  
  [x] npm install eslint-plugin-react-hooks --save-dev 
  [x] Fixed the issues after config

## package.json config

[x] update package.json  
  [x] build script  
  [x] serve script  

## Github

[x] create .nvmrc file  
[x] Add node version info add package.json engines fields  
[x] Create reprository at github  
[x] Create .gitignore file  

## CICD

[x] create yaml file .github\workflows\deployToPage.yaml  
[x] install devDependencies gh-pages  
[x] update package.js homepage  
[x] update package.js deploy script  
[x] create a token https://github.com/settings/tokens  
[x] create a env variable at https://github.com/{yourname}/{repro}/settings/secrets/actions and paste the value from last step token  