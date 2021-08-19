// Notes
// To Do; create a function that will take in two objects and return true or false, based on a pefect match.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

// Breakdown; Need to have two objects with the same number of keys (gonna probably have to use length),
// & make sure that each key has the same value.
// Steps 
// Write an if statement to compare the length of object.keys 
// 
// Write a for-in loop going through each key in object1 and compare to object2[key] value
// 

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (const key of object1Keys) {
      if (object1[key] !== object2[key]) {
        // console.log("These objects don't have the same keys");
        return false
    }
  } 
  return true;
}
}

// Answer notes: Object.keys returns an array of keys so, we can use length to compare the two arrays to see if the amount of keys
// in an object are the same
// The second half of the code with the if statement loops through each key in object1, object1[key] refers to the value in each key
// and we are running and if condition to see if object1[key] = object2[key] (checking if they hold the same values).
// We use a for of loop to compare elements in an array instead of a for in loop (which is use for objects)
// The if statement is comparing through the array elements to compare

const eqArrays = function (a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) || Array.isArray(b[i])) {
      return eqArrays(a[i], b[i]);
    } else if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const df = {a: "1", b: "2" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(df, ab), true);
assertEqual(eqObjects(abc, ba), false);
