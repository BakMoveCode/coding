/****
 *
 * 每隔一段时间执行一次
 *
 */

function throttle1(fn, wait) {
  let timer = null;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

function throttle2(fn, wait) {
  let pre = 0;
  return function(...args) {
    let now = +new Date();
    if (now - pre > wait) {
      fn.apply(this, wait);
      pre = now;
    }
  };
}

function throttle3(fn, wait) {
  let pre = 0;
  let timer = null;
  return function(...args) {
    let now = +new Date();
    if (now - pre > wait) {
      pre = now;
      clearTimeout(timer);
      timer = null;
      fn.apply(this, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this.args);
        timer = null;
      }, wait);
    }
  };
}
