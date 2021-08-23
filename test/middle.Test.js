const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, "second", 3]), ["second"]));
console.log(assertArraysEqual(middle([1, 2, 3, 6]), [2, 3]));