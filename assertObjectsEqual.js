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

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (const key of object1Keys) {
      if (object1[key] !== object2[key]) {
        return false
    }
  } 
  return true;
}
}


const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(
    eqObjects(actual, expected)
      ? `✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      : `❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
  );
};
