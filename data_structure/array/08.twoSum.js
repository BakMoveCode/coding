/**
 *
 * 两数之和
 *
 */

function twoSum(nums, target) {
  const map = {};
  if (Array.isArray(nums)) {
    for (let i = 0; i < nums.length; i++) {
      if (map[target - nums[i]] != undefined) {
        return [map[target - nums[i]], i];
      } else {
        map[nums[i]] = i;
      }
    }
  }
  return [];
}
