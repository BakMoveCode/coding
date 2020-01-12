const deepClone = function(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
};

let a = {
  b: {
    c: 1
  }
};

console.log(deepClone(a));
