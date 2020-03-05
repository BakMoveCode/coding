/***
 *
 * 异步循环打印,
 * 实现休眠效果，js没有休眠的语法
 */

const sleep = function(time, i) {
  return new Promise((resolve, reject) => {
    // setTimeout模拟实现异步
    setTimeout(() => {
      resolve(i);
    }, time);
  });
};

//async 异步
const start = async function() {
  for (let i = 0; i < 6; i++) {
    // await异步
    let result = await sleep(1000, i);
    console.log(result);
  }
};

start();

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

const sleep = function(i, wait) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(i);
    }, wait);
  });
};

const start = async function() {
  for (let i = 0; i < 6; i++) {
    let result = await sleep(i, 1000);
    console.log(result);
  }
};

start();
