let arr = [1, 2, 1, 3, 2, 4, 6, 2, 3, 1];

const unique1 = function(arr) {
  return Array.from(new Set(arr));
};

const unique2 = function(arr) {
  return [...new Set(arr)];
};

const unique3 = function(arr) {
  let newArr = [];
  arr.forEach(item => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

const unique4 = function(arr) {
  let obj = {};
  arr.forEach(item => {
    obj[item] = item;
  });

  return Object.keys(obj).map(item => {
    return +item;
  });
};

console.log(unique1(arr));
console.log(unique2(arr));
console.log(unique3(arr));
console.log(unique4(arr));
