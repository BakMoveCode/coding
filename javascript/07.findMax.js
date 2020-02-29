let arr = [1, 2, 4, 3, 2, 1, 6, 9];

const max = function(arr) {
  return arr.reduce((arr, current) => {
    return Math.max(arr, current);
  });
};

const min = function(arr) {
  return arr.reduce((arr, current) => {
    return Math.min(arr, current);
  });
};

console.log(max(arr));
console.log(min(arr));

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
function minEatingSpeed(piles, H) {
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
}
