const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const letterPositions =  require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head,  
  tail,   
  middle, 
  assertArraysEqual, 
  assertEqual, 
  eqArrays,
  assertObjectsEqual,
  countLetters,
  eqObjects,
  countOnly,
  findKey,
  letterPositions,
  findKeyByValue,
  map,
  takeUntil,
  without
};

