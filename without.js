const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(arr, arr2) {
  if (arr.length !== arr2.length) {
    console.log("These arrays don't match in length");
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      console.log("These arrays do not match");
      return false;       
    }
  }
  console.log("These arrays match");
  return true;
};

const without = function(arr, arr2) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(without([1, 2, 3, 5, 7], [2, 5]));