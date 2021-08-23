const middle = require('../middle');
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it ("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns ['second'] for [1, 'second', 3]", () => {
    assert.deepEqual(middle([1, "second", 3]), ["second"])
  });

  it("returns [2, 3] for [1, 2, 3, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 6]), [2, 3])
  });
});
