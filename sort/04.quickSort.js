/****
 *
 * 快速排序
 * 是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。
 * 该算法不断重复这个步骤直至所有数据都是有序的。
 *
 * 简单说：
 * 找到一个数作为参考，比这个数字大的放在数字左边，比它小的放在右边；然后分别再对左边和右边的序列做相同的操作；
 *
 * 1. 选择一个基准元素，将列表分割成两个子序列
 * 2. 对列表重新排序，将所有小于基准值的元素放在基准值前面。所有大于基准值的元素放在基准值的后面
 * 3. 分别对较小元素的子序列和较大元素的子序列重复步骤1和2
 *
 * 记忆点：
 * 快速分左右，小等于1返回数组
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let current = arr.splice(0, 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(arr);
  return quickSort(left).concat(current, quickSort(right));
}

let arr = [1, 6, 2, 1, 0, 5, 8, 4, 9, 3];

console.log(quickSort(arr));

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
