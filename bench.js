var SwapArray = require('./dist/swap-array').default;
var TestArr = ['a','b','c'];

suite('Swap arrays', function() {
  bench('SwapArray-Package', function() {
    SwapArray(TestArr, 0, 2);
  });
});
