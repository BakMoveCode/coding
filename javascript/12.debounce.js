/**
 * 防抖函数
 * 原理：
 * 尽管触发事件，但是一定是在事件触发n秒收才执行，
 * 如果在一个事件触发的n秒内又出发了这个事件，就以新的事件的事件为准，n秒后才执行，
 * 总之，就是要等触发完事件n秒内不再触发事件，才执行，就是这么任性。
 */

function debounce(func, wait) {
  let timerId = null;
  return function() {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}

// 立即执行一次后，再wait后执行
function debounce(fn, wait, flag) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    if (flag && !timer) {
      fn.apply(this, args);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

//测试代码

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

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
