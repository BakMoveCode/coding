/**
 *
 * https://mp.weixin.qq.com/s/T8QXzDrqzzF6HqfCghV17w
 * 斐波那契数列，又称为黄金分割数列，意兔子繁殖为例子而引入，又称为兔子数列
 * 从数列的第三项开始，每一项都等于前两项之和
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233，377，610，987，1597，2584，4181，6765，10946，17711，28657，46368........
 */

function fib(n) {
  if (n === 0 || n === 1) return n;

  return fib(n - 2) + fib(n - 1);
}

fib(10);

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

const fib = function(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(10));
