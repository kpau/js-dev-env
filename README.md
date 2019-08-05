# Building a JavaScript Development Environment

(_by Cory House_)

Starting a new JavaScript project from scratch is overwhelming. This course provides a playbook outlining the key decisions you need to make. Build a robust development environment that handles bundling, linting, transpiling, testing, and much more.

<https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents>

## 1. Editors and Configurations

### 1.a. Editor

1. Atom
2. WebStorm
3. Brackets
4. **VSCode**

### 1.b. Editorconfig

<https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig>

VSCode extension: EditorConfig for VS Code

## 2. Package Management

1. Bower
2. **npm**
3. JSPM
4. Jam
5. volo

## 3. Development Web Server

1. http-server
2. live-server
3. **Express**
    * koa
    * hapi
4. budo
5. Webpack dev server
6. Browsersync

### Sharing work-in-progress

1. **localtunnel**
2. ngrok
3. Surge
4. now

## 4. Automation

1. Grunt
2. Gulp
3. **npm Scripts**

## 5. Transpiling

1. **Babel**
2. Typescript
3. Elm

## 6. Bundling

### Modules

1. IIFE
2. Asynchronous Module Definition (AMD)
3. CommonJS (CJS)
4. Universal Module Definition (UMD)
5. **ES6 Modules**

### Bundler

1. require.js - AMD
2. Browserify
3. **Webpack**
4. Rollup
5. JSPM

## 7. Linting

1. JSLint
2. JSHint
3. **ESLint**
4. TSLint

### Descisions (eslint)

1. Configuration file
2. Rules
3. Warnings or errors
4. Plugins
5. Preset

### Watchers and other

1. eslint-loader (webpack)
2. **eslint-watch**
3. babel-eslint

## 8. Testing and Continuous Integration (CI)

### Testing Descisions

1. Testing Framework
    * **Mocha**
    * Jasmine
    * Tape
    * QUnit
    * AVA
    * Jest
2. Assertion Library
    * **Chai**
    * Should.js
    * expect
3. Helper Library
    * **JSDOM**
    * Cheerio
4. Where to run tests?
    * Browser - Karma, Testem
    * Headless browser - PhantomJS
    * **In-memory DOM - node, JSDOM**
5. Where do test files belong?
    * Centralized
    * **Alongside**
6. When should thest run?
    * **Unit tests - immediately on Save**
    * Integration tests - on demand, or QA

### Continuous Integration

1. **Travis (Linux)**
2. **Appveyor (Windows)**
3. Jenkins
4. CircleCI
5. Semaphore
6. SnapCI
