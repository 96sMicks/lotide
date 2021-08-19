const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

// Goal is to create a code that will accept an object as the first argument, the second argument will be a value and
// scan through the object to bring back the first key with said value, if none return undefined.

// Steps & Tips
// Need to use object.keys to find all the keys in an object
// should use a for-of loop to loop over the keys returned by object.keys
// maybe use include. method  from other assignment
// 1st run a for-of loop so that i loops through all object keys
// add and if statement so the i/key is = to scannedValue, we return that key ?


const findKeyByValue = function(obj, scannedValue) {
  for (const key in obj) {
    if(obj[key] === scannedValue) {
      return key;
    } 
  }
}
// Answer notes:
// the for in loop loops though each key in the object (in this case "key" = i in a regular for loop)
// obj[key] is able to access the value of each key, and we return that key which holds our scannedValue
// we don't need to write a return undefined statement since it's implied if the code isn't able to find a key, it will return undefined
// it's own

// first draft answer:
// for(let i = 0; i < Object.keys(obj); i++) {
//   if(obj[i] === scannedValue) {
//     console.log (obj[i]);
//   } else {
//     console.log("undefined")
//   }
// }

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));