const tail = require('../tail');
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')

describe("#tail", () => {
  it ("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it ("returns [3, 77] for [2, 3, 77]", () => {
    assert.deepEqual(tail([2, 3, 77]), [3, 77]);
  });
})

