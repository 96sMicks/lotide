const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual')

const words = ["Yo Yo", "Lighthouse", "Labs"]
const numbers = [2, 3, 77]
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);
assertArraysEqual(tail(numbers), [3, 77]);