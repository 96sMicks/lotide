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

const words = ["roger", "heading", "out", "command"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, (word) => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, ["r", "h", "o", "c"]));
console.log(assertArraysEqual(results1, ["r", "c", "o", "c"])); 