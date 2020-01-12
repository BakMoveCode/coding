function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let current = arr.splice(0, 1);
  arr.forEach(element => {
    if (element < current) {
      left.push(element);
    } else {
      right.push(element);
    }
  });
  return quickSort(left).concat(current, quickSort(right));
}

let arr = [1, 6, 2, 1, 0, 5, 8, 4, 9, 3];

console.log(quickSort(arr));
