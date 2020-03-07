/***
 * 将数组打乱顺序(洗牌算法)
 * 乱序
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const disorder = arr => {
  return arr.sort(() => {
    return Math.random() - 0.5;
  });
};

console.log(disorder(arr));
