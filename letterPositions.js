const assertArraysEqual = function(arr, arr2) {
  if (arr.length !== arr2.length) {
    console.log("🛑These arrays don't match in length");
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      console.log("🛑These arrays do not match");
      return false;       
    }
  }
  console.log("✅These arrays match");
  return true;
};

const eqArrays = function(arr, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;       
    }
  } 
  return true;
};


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      }  else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));
console.log(letterPositions("Hey how you doing"));
