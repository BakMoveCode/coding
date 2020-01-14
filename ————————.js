function flat1(arr) {
  return arr
    .toString()
    .split(",")
    .map(item => {
      return +item;
    });
}

function flat2(arr) {
  let result = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      result = result.concat(flat2(element));
    } else {
      result.push(element);
    }
  });
  return result;
}

const arr = [1, [3, 4, [5, 6, [3, 2]]]];
console.log(flat1(arr));
console.log(flat2(arr));
