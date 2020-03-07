/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 *
 * 核心思想：
 * 取中间（mid）值，只要nums[mid-1]大于nums[mid]，则mid左边一定有峰值；
 * 反之mid-1右边一定存在峰值，因为两端无穷小，
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  // 判断是否是数组
  if (!Array.isArray(nums)) {
    return false;
  }
  // 如果是1直接返回0
  if (nums.length === 1) {
    return 0;
  }
  let l = 0; // l为left，
  let r = nums.length - 1; // r为right
  let mid = Math.floor((l + r) / 2); // Math.floor为一个数向下取整
  while (l <= r) {
    if (mid === l) {
      return nums[l] > nums[r] ? l : r;
    } else if (nums[mid - 1] > nums[mid]) {
      r = mid;
    } else {
      l = mid;
    }
    mid = Math.floor((l + r) / 2);
  }
};
// @lc code=end
