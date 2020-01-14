const flat1 = function(arr) {
  let newArr = [];
  for (let i of arr) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flat1(arr[i]));
    } else {
      Array.push(arr[i]);
    }
  }
  return newArr;
};

const flat2 = function(arr) {
  return arr
    .toString()
    .split(",")
    .map(item => {
      return +item;
    });
};

const arr = [1, [3, 4, [5, 6, [3, 2]]]];
console.log(flat1(arr));
console.log(flat2(arr));
