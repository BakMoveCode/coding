let arr = [1, 2, 4, 3, 2, 1, 6, 9];

const max = function(arr) {
  return arr.reduce((arr, current) => {
    return Math.max(arr, current);
  });
};

const min = function(arr) {
  return arr.reduce((arr, current) => {
    return Math.min(arr, current);
  });
};

console.log(max(arr));
console.log(min(arr));
