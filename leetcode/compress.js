/****
 *
 *请在24小时内完成该题目（以纸笔或者文本形式完成，请勿使用IDE等开发工具），并发回至联系人邮箱！

题目要求：
1、请写出实际代码（可以使用任意熟悉的编码语言）

题目内容：
给定由普通英文字母组成的非空字符串s1，要求将连续出现的字符压缩成字符和该字符连续出现的次数，并返回新的字符串s2。s1字符串的长度不超过100。

输入描述: 
全部由普通英文字符组成的长度不超过100的字符串 。
 输出描述: 
由英文字符和数字组成的字符串，其中数字表示它前面的字符在输入字符串中连续出现的次数。
 示例
 输入：
aabccccaaa 
 输出：
a2bc4a3 
 *
 */

const stringCompress = function(str) {
  if (!str || str.length === 0) {
    throw "无效的字符串";
  } else if (str.length > 100) {
    throw "字符串长度超出100";
  }
  const reg = /^[A-Za-z]{1,100}$/;
  let result = "";
  if (reg.test(str)) {
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      let current = str[i];
      result = result + current;

      let j = i + 1;
      while (str[j] === current) {
        count++;
        j++;
      }

      if (count !== 1) {
        result = result + count;
        i = i + count - 1;
        count = 1;
      }
    }
    return result;
  } else {
    throw "无效字符串";
  }
};

stringCompress("aabccccaaa");
