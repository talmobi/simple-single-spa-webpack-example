# Tech Challenge

## The issue

Child applications fail to load a second time when revisiting the application.

```
[Error] Error: 'app-3' died in status NOT_MOUNTED: No NgModule metadata found for 'MainModule'.
  runTask (root-application.js:36:3324)
  invokeTask (root-application.js:36:9210)
  n (root-application.js:8:7803)
```

## Why is this happening?

The module 'reflect-metadata' mutates the global `window.Reflect` object
which breaks previously mounted child applications that mutated the same global.
Attempting to navigate to a previously visited child application will fail and throw an error.

## Solutions

### Only import 'reflect-metadata' in the root application

See branch `xeii_fix` aka `git fetch && git checkout xeii_fix`

#### Pros
  1. Fixes the issue
#### Cons
  2. Burden of responsibility at Child Applications.
  3. May have unintended side effects

### Reset the window.Reflect global from all mutations

See branch `partial_reset_fix` aka `git fetch && git checkout preset_reset_fix`

#### Pros
  1. Fixes the issue
  2. Only need to edit root appliaction
#### Cons
  3. May have unintended side effects

# simple-single-spa-webpack-example
A simple example of how to use webpack with [single-spa](https://github.com/joeldenning/simple-single-spa-webpack-example/blob/master/README.md). Check out [the docs](https://github.com/CanopyTax/single-spa) and [the guide](https://medium.com/@joeldenning/a-step-by-step-guide-to-single-spa-abbbcb1bedc6) to learn more about single-spa itself.

This repository hopefully will be helpful for starting your own single-spa project. It has a react application and an angular application coexisting in a minimalistic way. If this project turns out to be helpful to people, I can add some more documentation, comments in the code, etc.

## How to use it
1. Clone this project
2. `npm install`
3. `npm run build`
4. `npm start`
5. Open up http://localhost:9090 in a web browser.
