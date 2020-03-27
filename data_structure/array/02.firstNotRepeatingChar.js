/****
 *
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）
 *
 */

/**
 *
 * 方法一
 * 用一个map存储每个字符出现的字数
 * 第一次循环存储次数，第二次循环找到第一个出现一次的字符
 * 事件复杂度O(n)，空间复杂度O(n)
 *
 */
function firstNotRepeatingChar(str) {
  if (!str) {
    return -1;
  }

  let countMap = {};

  const array = str.split("");
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const current = array[i];
    let count = countMap[current];
    if (count) {
      countMap[current] = count + 1;
    } else {
      countMap[current] = 1;
    }
  }

  for (let i = 0; i < length; i++) {
    if (countMap[array[i]] === 1) {
      return i;
    }
  }
  return -1;
}

/***
 *
 * 方法二
 *
 * 使用JS的array提供的indexof和lastIndexof方法
 * 遍历字符串，比较每个字符第一次和最后一次出现的位置是否相同
 * indexof的事件复杂度为O(n)，所以整体的事件复杂度O(n*n)，空间复杂度为0
 *
 */

function firstNotRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
}
