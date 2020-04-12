# Promise

```
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("settimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
```

考察的知识点有：promise，setTimeout，async/await 的实现以及执行顺序，事件循环中的宏任务和微任务

## 事件循环

定义：JS 主线程不断的循环往复的从任务队列中读取任务，执行任务，这种运行机制称为事件循环

微任务的优先级高于宏任务
微任务：

- process.nextTick
- promise
- Object.observe（废弃）
- MutationObserver

宏任务

- setTimeout
- setInterval
- setImmediate
- I/O
- UI 渲染

注意：

1. 每个事件循环都有一个微任务
2. 每个事件循环会有一个或者多个宏任务
3. 一个任务可以放入宏任务也可以放入微任务
4. 每一次事件循环，会首先执行微任务，执行完成后，会提取宏任务的一个人加入执行栈，接着继续执行微任务，依次执行下去直至所有任务执行结束

## 异步执行机制

记忆：

JS 主线程拥有一个执行栈（同步任务）和一个任务队列，主线程会依次执行代码，

1. 当遇到函数时，会先将函数入栈，函数运行结束后在将该函数出栈
2. 当遇到异步任务时，会将该任务定义好的回调函数加入任务队列中（这个任务队列包含宏任务和微任务）
3. 当 JS 主线程清空执行栈之后，会按先入先出的顺序读取微任务中的回调函数，并将该函数入栈，继续执行下去，
4. 当微任务队列中的任务执行完成后，会提取宏任务队列的一个任务加入执行，接着继续执行微任务，依次执行下去直至所有任务执行结束

注意：

1. Promise 构造函数本身是同步的立即执行函数，其中的 then/catche 才是微任务
2. Promise 构造函数中 resole()之后的代码，依然会执行

## 异步解决方案的发展历程和优缺点

发展历史和优缺点：

1. 回调函数（callback）

- 缺点：回调地狱，不能用 try catch 捕获错误，不能 return

2. Promise

- 特点：链式调用，then 后返回的都是一个全新的 promise
- 优点：解决了回调地狱的问题
- 缺点： 无法取消 Promise，错误需要通过回调函数捕获

3. Generator

- 特点：可以控制函数的执行

4. async/await

- 特点：代码清晰，不用像 Promise 写一大堆 then，处理了回调地狱的问题
- 缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低

## Promise.all()

Promise.all()的参数是传入一个数组，数组的值是 Promise 对象，这个函数返回一个 promise 对象

这个函数的功能是：

1. 检查传入的所有数组是否都执行成功，
2. 如果都成功那么这个函数返回的 Promise 对象进入 resolve 状态并将所有 promise 成功的参数组成一个数组传给 resolve 函数，
3. 如果其中任何一个失败，那么就进入 reject 状态，并将第一个 reject 的 promise 的参数传给 Promise.all 返回的 promise 函数的 reject 对象

特点：存在一个 reject，那么所有 reject，修改为存在一个 reject，其他依然能正确返回？

错误处理：

1. 全部修改为串行调用（失去并发优势）
2. 当 Promise 捕获到 error 的时候，代码吃掉这个异常，返回 resolve，约定特殊格式表示这个调用成功了
