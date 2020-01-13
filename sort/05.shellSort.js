/***
 *
 * 希尔排序，是插入排序的改良算法，但是核心理念与插入算法又不同，会优先比较距离较远的元素，而非相邻的元素。
 *
 */

function shellSort(arr, gap) {
  let len = arr.length;
  for (let i = 0; i < gap.length; i++) {
    let n = gap[i];
    for (let j = i + n; j < len; j++) {
      for (let k = j; k > 0; k -= n) {
        if (arr[k] < arr[k - n]) {
          [arr[k], arr[k - n]] = [arr[k - n], arr[k]];
          console.log(`当前序列为【${arr}】\n 交换了${arr[k]}, ${arr[k - n]}`);
        } else {
          continue;
        }
      }
    }
  }
  return arr;
}

var arr = [3, 2, 45, 6, 55, 23, 5, 4, 8, 9, 19, 0];
var gap = [3, 2, 1];
console.log(shellSort(arr, gap));
