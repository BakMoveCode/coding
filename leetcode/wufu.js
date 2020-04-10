/***
 *
 * 华为笔试题，集五福
 */

function find(str) {
  if (str.length === 0) {
    return false;
  }
  let nums = str.split(",");
  let result = [0, 0, 0, 0, 0];
  nums.forEach((element) => {
    let temp = element.split("");
    temp.forEach((v, i) => {
      if (v === "1") {
        result[i]++;
      }
    });
  });
  return result.reduce((acc, cur) => {
    return Math.min(acc, cur);
  });
}

let test = "01111";
console.log(find(test));
