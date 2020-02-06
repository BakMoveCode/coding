/****
 *
 * 数组去重
 *
 * 兼容性：
 *
 * 场景：
 *  数组中是否包含对象，NaN，null，undefined，
 * == 和 === 区别：
 *  ===是严格相等，会比较两个值的类型和值
 *  ==抽象相等，比较时，会先进行类型转换，然后再比较值
 *
 * indexof与Set的一点说明
 *  indexof底层使用的是 === 进行判断，所以使用indexof查找不到NaN元素
 *  Set可以去重NaN类型，Set内部认为尽管NaN === NaN为false，但是者两个元素是重复的
 *
 * 性能考虑
 *
 * 总结，需要考虑的问题如下：
 * 1. 优化
 * 2. 代码规范
 * 3. 容错性，关键在于你所表达出的解决问题的思路，甚至通过表达解题思路的方向，以及你考虑问题的全面性。
 */

let arr = [1, 2, 1, 3, 2, 4, 6, 2, 3, 1];

const unique1 = function(arr) {
  return Array.from(new Set(arr));
};

const unique2 = function(arr) {
  return [...new Set(arr)];
};

const unique3 = function(arr) {
  let newArr = [];
  arr.forEach(item => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

const unique4 = function(arr) {
  let obj = {};
  arr.forEach(item => {
    obj[item] = item;
  });

  return Object.keys(obj).map(item => {
    return +item;
  });
};

const unique5 = function(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};

console.log(unique1(arr));
console.log(unique2(arr));
console.log(unique3(arr));
console.log(unique4(arr));
