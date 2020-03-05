/***
 *
 *
 * 防抖和节流的结合版本
 * https://juejin.im/post/5df5bcea6fb9a016091def69#heading-97
 */

function throttle(fn, delay) {
  let last = 0,
    timer = null;
  return function(...args) {
    let context = this;
    let now = new Date();
    if (now - last > delay) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 这个时候表示时间到了，必须给响应
      last = now;
      fn.apply(context, args);
    }
  };
}

// 防抖，节流函数
const throttle = (method, mustRunDelay = 300) => {
  let timer,
    args = arguments,
    start;
  return function loop() {
    let self = this;
    let now = Date.now();
    if (!start) {
      start = now;
    }
    if (timer) {
      clearTimeout(timer);
    }
    if (now - start >= mustRunDelay) {
      method.apply(self, args);
      start = now;
    } else {
      timer = setTimeout(function() {
        loop.apply(self, args);
      }, 50);
    }
  };
};

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

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
