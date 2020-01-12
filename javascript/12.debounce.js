/****
 *
 * 防抖，是指在一定的时间内无论执行多少次，只执行最后一次
 *
 */
function debounce(fn, wait) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
