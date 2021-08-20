const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
const results = []
for (const item of array) {
if (callback(item)) {
  break;
}
results.push(item);
}
return results;
}

const results1 = takeUntil(data1, (x) => x < 0);
const results2 = takeUntil(data2, (x) => x === ",")
console.log(results1);
/*
Notes on how this works
we'll push out answers into an empty array
we loop through the array using the for-of, callback acts as a conditional statement, if item[like "i"] meets the callback condition
we BREAK from the loop (since we reached our condition) and return an array until we met our stop condition
*/

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

console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
console.log(assertArraysEqual(results1, [1, 2, 5]));
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 5])); 
console.log("-------")
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));
console.log(assertArraysEqual(results2, ["I've", "been", "to"]));
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Canada"]));
