# Swap Array
Swap position of two items in array without changing the state of the passed array.

[![Build Status](https://travis-ci.org/michaelzoidl/swap-array.svg?branch=master)](https://travis-ci.org/michaelzoidl/swap-array)
[![devDependency Status](https://david-dm.org/michaelzoidl/swap-array/dev-status.svg)](https://david-dm.org/michaelzoidl/babel-root-import#info=devDependencies)

## Install
```
$ npm install swap-array --save
```

## Usage
```js
import SwapArray from 'swap-array';

var SomeArray = ['thats','cool','dude'];

SwapArray(SomeArray, 0, 2);
// ['dude','thats','cool'];
```

## Does it change the passed array?
Nope, before it changes the positioning we clone the passed array and return just the new instance. Ideal for e.g. some redux-reducer where it's not allowed to change an existing state. If you want that the origin-array changes his state checkout the [array-swap](https://github.com/Marko-Jankovic/array-swap) repo from Marko Jankovic.

## FAQ
### How to import/require with old ES5 standard
Just import it usually but attend the default prop
```javascript
var SwapArray = require('swapt-array').default;
```

## Benchmark
```
1,149,543 op/s
```

## Contribute
```shell
// Run and Watch tests
$ npm run test -- -w

// Just run tests
$ npm run test

// Create new build
$ npm run build

// Run benchmark
$ npm run bench
```
