import { expect } from 'chai';
import SwapArray from './';

describe('SwapArray', () => {
  it('swaps two array-items by its index-address', () => {
    const PrimArray = ['a','b','c'];
    expect(SwapArray(PrimArray, 0, 2)).to.deep.equal(['c','b','a']);
  });

  it('doesnt change the state of the passed array, it just returns a new state', () => {
    const PrimArray = ['a','b','c'];
    SwapArray(PrimArray, 0, 2);
    expect(PrimArray).to.deep.equal(['a','b','c']);
  })

  it('throws err if no array is passed as first param', () => {
    expect(() => SwapArray({}, 0, 0)).to.throw(/ERR/)
    expect(() => SwapArray('', 0, 0)).to.throw(/ERR/)
    expect(() => SwapArray(123, 0, 0)).to.throw(/ERR/)
    expect(() => SwapArray([], 0, 0)).to.not.throw(/ERR/)
  });
});
