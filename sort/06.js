/***
 *
 * 归并排序
 *
 * 该算法是采用分治法（分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案“修补”在一起，即分而治之）
 *
 * 分割：
 * 1. 将数组从中点进行分割，分为左，右两个数组
 * 2. 递归分割左，右数组，直到数组长度小于2
 *
 * 归并：
 * 如果需要合并，那么左右两个数组已经有序了。
 */

// 写法一
// 分割数组时直接将数组分割为两个数组，合并时直接合并数组
// 优点：思路简单，写法简单
// 缺点：空间复杂度略高，需要复制多个数组

function mergeSort1(array) {
  if (array.length < 2) {
    return array;
  }
  // 取中间值的下标
  const mid = Math.floor(array.length / 2);
  // 分割数组
  const front = array.slice(0, mid);
  const end = array.slice(mid);
  return merge1(mergeSort1(front), mergeSort1(end));
}
function merge1(front, end) {
  // 临时使用一个空间来保存
  const temp = [];
  while (front.length && end.length) {
    if (front[0] < end[0]) {
      temp.push(front.shift());
    } else {
      temp.push(end.shift());
    }
  }
  while (front.length) {
    temp.push(front.shift());
  }
  while (end.length) {
    temp.push(end.shift());
  }
  return temp;
}

var arr = [3, 2, 45, 6, 55, 23, 5, 4, 8, 9, 19, 0];
console.log(mergeSort(arr));

// 写法2

function mergeSort(arr, left, right, temp) {}
