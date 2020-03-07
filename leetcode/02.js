/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */

const findMax = function(arr) {
  return arr.reduce((arr, current) => {
    return Math.max(arr, current);
  });
};
// 计算吃完所有香蕉需要的时间
function getHours(piles, speed) {
  let hours = 0;
  for (let p of piles) {
    hours += (p + speed - 1) / speed;
  }
  return hours;
}
var sumSubarrayMins = function(A) {
  let max = findMax(piles);
  let left = 1;
  let right = max;
  while (left <= right) {
    let mid = left + (right - left) / 2;
    let hours = getHours(piles, mid);
    console.log("hours:" + hours);
    if (hours <= H) {
      if (mid === left || getHours(piles, mid - 1) > H) {
        return mid;
      }
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
// @lc code=end
