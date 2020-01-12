/****
 *
 *
 * 插入排序
 *
 * 核心思想：想着自己在打牌，接起来一张，放哪里无所谓，再接起来一张，比第一张小，放左边，继续接，可能是中间数，就插在中间。。。依次
 *
 * 原理：
 * 1. 首先将待排序的第一个记录作为一个有序段
 * 2. 从第二个开始，到最后一个，依次和前面的有序段进行比较，确定插入位置
 *
 * 注意：
 * 1. i是外循环，依次把后面的数插入前面的有序序列中，默认arr[0]为有序的，i就从1开始
 * 2. j进来后，依次与前面队列的数进行比较，因为前面的序列是有序的，因此只需要循环比较，交换即可
 * 3. 注意这里的break，因为前面是都是有序的序列，所以如果当前插入的值arr[i]大于或等于arr[j-1]，则无需继续比较，直接下一次循环就可以了
 *
 *
 * 记忆点：
 * 插入打牌，外1开始内0结束
 */

function inserSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}
function inserSort(arr) {
  let len = arr.length;
  for (let outer = 1; outer < len; outer++) {
    for (let inner = outer; inner > 0; inner--) {
      if (arr[inner] < arr[inner - 1]) {
        [arr[inner], arr[inner - 1]] = [arr[inner - 1], arr[inner]];
      }
    }
  }
  return arr;
}

let arr = [1, 6, 2, 1, 0, 5, 8, 4, 9, 3];

console.log(inserSort(arr));
