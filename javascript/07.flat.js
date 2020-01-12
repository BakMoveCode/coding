const flat = function(arr) {
  let newArr = [];
  for (let i of arr) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flat(arr[i]));
    } else {
      Array.push(arr[i]);
    }
  }
  return newArr;
};

const flat = function(arr) {
  return arr
    .toString()
    .split(",")
    .map(item => {
      return +item;
    });
};
