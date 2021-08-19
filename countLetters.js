const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const countLetters = function(wordToCount) {
  let results = {};
  for (let letter = 0; letter < wordToCount.length; letter++) {
  if (results[wordToCount[letter]] === undefined) {
  results[wordToCount[letter]] = 1;
  } else {
  results[wordToCount[letter]] = results[wordToCount[letter]]+1;
  }
} return results;
}

console.log(countLetters("Hello"));