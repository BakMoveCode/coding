/****
 *
 * 扁平化
 */

// 第一种防范
const flat = function(arr) {
  return arr
    .toString()
    .split(",")
    .map(item => +item);
};

// 第二种方法
const flat = arr => {
  let result = [];
  arr.forEach(e => {
    if (Array.isArray(e)) {
      result = result.concat(flat(e));
    } else {
      result.push(e);
    }
  });
  return result;
};

//测试
let arr = [1, [2, 3]];
console.log(flat(arr));

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

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
