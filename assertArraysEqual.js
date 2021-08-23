const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr, arr2) {
  if (eqArrays(arr, arr2)) {
    console.log(`✅  Assertion passed: ${arr} === ${arr2}`);
    return true;
  } else {
    console.log(`🛑  Assertion failed: ${arr} !== ${arr2}`);
    return false;
  }
};

module.exports = assertArraysEqual;