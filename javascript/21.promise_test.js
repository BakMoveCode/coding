/***
 *
 * 宏任务和微任务测试
 */

console.log("1111");

let test = new Promise((resolve, reject) => {
  console.log("2222aaaaaaa");
  let timer1 = setTimeout(() => {
    console.log("2222");
    clearTimeout(timer1);
    resolve();
  }, 1000);
});

test.then(() => {
  console.log("3333");
});

let timer2 = setTimeout(() => {
  console.log("4444");
  clearTimeout(timer2);
}, 0);

console.log("55555");
