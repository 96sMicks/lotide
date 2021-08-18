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

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [1, "second", 3]));
console.log(eqArrays([1, 2, 3, 6], [1, 2, 3]));