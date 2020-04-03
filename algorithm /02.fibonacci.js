/***
 *
 * 斐波那数列
 *
 */

// 递归接发
function fib(n) {
  if (n < 2) {
    return n;
  }
  console.log(n);
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(10));

// 递归家记忆化

function fib2(n, memory = []) {
  if (n < 2) {
    return n;
  }
  if (!memory[n]) {
    memory[n] = fib2(n - 1, memory) + fib2(n - 2, memory);
  }
  console.log(memory);
  return memory[n];
}

// console.log(fib2(10));

// 动态规划
function fib3(n) {
  if (n <= 1) {
    return n;
  }
  let i = 1;
  let pre = 0;
  let current = 1;
  let result = 0;
  // 定义循环多少次， 从1开始
  while (i++ < n) {
    console.log(result, pre, current);
    // result是上一个和现在的和
    result = pre + current;
    // 将现在的定义为以前的
    pre = current;
    // result设置是现在的
    current = result;
  }
  return result;
}

console.log(fib3(10));
