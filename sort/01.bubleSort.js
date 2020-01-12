/****
 *
 * 冒泡排序
 *
 * 基本思想是两两进行比较
 *
 *
 * 注意：
 * 1. 外层循环遍历数组的每一个元素，从最大值开始递减，因为内层是两两比较的，因此最外层当>=2时即可停止
 * 2. 内层循环用于比较元素，相邻元素两两比较，从0开始，比较inner和inner+1，因此临界条件是inner < outer -1
 *
 * 记忆点：
 * 冒泡两两比较，外大2，内小外
 */

function bubleSort(arr) {
  let len = arr.length;
  // 外层循环遍历数组的每一个元素
  for (let outer = len; outer >= 2; outer--) {
    // 内层循环用于比较元素
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        let temp = arr[inner];
        arr[inner] = arr[inner + 1];
        arr[inner + 1] = temp;
      }
    }
  }
  return arr;
}

//简化版本

function bubleSort2(arr) {
  let len = arr.length;
  for (let outer = len; outer >= 2; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]];
      }
      console.log(arr);
    }
  }

  return arr;
}

function bubleSort(arr) {
  var len = arr.length;
  for (let outer = len; outer >= 2; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        let temp = arr[inner];
        arr[inner] = arr[inner + 1];
        arr[inner + 1] = temp;
      }
      console.log(arr);
    }
  }
  return arr;
}

let arr = [1, 6, 2, 1, 0, 5, 8, 4, 9, 3];

// console.log(bubleSort(arr));
console.log(bubleSort(arr));
