/****
 *
 * 选择排序
 *
 * 选择排序是从数据的开头开始，将第一个元素和其他元素作比较，检查完所有的元素后，最小的放在第一个位置，
 * 接下来再开始从第二个元素开始重复以上一直到最后
 *
 * 注意：
 * 1. 外层循环的i表示第几轮，arr[i]就表示当前轮次最靠前（小）的位置
 * 2. 内层从i开始，依次往后数，找到比开头小的，互换位置即可
 *
 * 记忆点：
 * 选择最小，内从外开始并比较
 *
 */

function selectSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i; j < len; j++) {
      if (arr[j] > arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

let arr = [1, 6, 2, 1, 0, 5, 8, 4, 9, 3];

console.log(selectSort(arr));
