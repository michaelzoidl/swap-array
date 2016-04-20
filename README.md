# Swap Array
Swap position of two items in array without changing the state of the passed array.

## Install
```
$ npm install swap-array --save
```

## Usage
```js
// Import with ES6
import SwapArray from 'swap-array';

// Import with ES5
var SwapArray = require('swap-array').default;

var SomeArray = ['thats','cool','dude'];

SwapArray(SomeArray, 0, 2);
// returns:
// ['dude','thats','cool'];

// and 'SomeArray' is still:
// ['thats','cool','dude'];
```

## By the way
Nope, before it changes the positioning we clone the passed array and return just the new instance. Ideal for e.g. some redux-reducer where it's not allowed to change an existing state.

## Benchmark
```
1,149,543 op/s
```

## Contribute
```
// Run and Watch tests
$ npm run test -- -w

// Just run tests
$ npm run test

// Create new build
$ npm run build

// Run benchmark
$ npm run bench
```
