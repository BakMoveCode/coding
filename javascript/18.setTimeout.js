/***
 *
 * setTimeout的替代实现
 *
 * 因为宏任务和微任务的关系，定时器会延迟
 *
 * 使用的是 web animation api来解决
 *
 */

function ownSetTimeout(callback, duration) {
  const div = document.createElement("div");

  const keyframes = new KeyframeEffect(div, [], { duration, iterations: 1 });

  const animation = new Animation(keyframes, document.timeline);

  animation.play();

  animation.addEventListener("finish", () => {
    callback();
  });
}

/***
 *
 * setTimeout构造轮询保证每次轮询的间隔
 *
 * 在前一个定时器代码执行完之前，不会向队列插入新的定时器代码，确保不会有任何缺失的间隔。
 * 而且，它可以保证在下一次定时器代码执行之前，至少要等待指定的间隔，避免了连续的运行
 */

setTimeout(function () {
  console.log("我被调用了");
  // callee是arguments对象的一个属性，可以用于引用该函数的函数体内当前正在执行的函数
  setTimeout(arguments.callee, 100);
}, 100);

// 另外一种写法
setTimeout(function fn() {
  console.log("我被调用了");
  setTimeout(fn, 100);
}, 100);
