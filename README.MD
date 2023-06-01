# React with webpack from scratch

[x] npm init -y

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

## package.json config

[x] update package.json  
  [x] build script  
  [x] serve script  
