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

const middle = function(arr) {
  if (arr.length === 1 || arr.length === 2) {
    return [];
  }
  let middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};

// Test Codes
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, "second", 3]));
console.log(assertArraysEqual([1, 2, 3, 6], [1, 2, 3]));