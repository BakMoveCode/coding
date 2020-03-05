/***
 *
 * 浅拷贝
 * 基本类型，拷贝基本类型的值
 * 引用类型，拷贝的是栈内存中的地址，并且如果其中一个对象修改了某些属性，那么另一个对象就会受到影响
 * arr.slice()
 * arr.concat()
 */

/**
 *
 * 深拷贝
 * 指从内存中完整地拷贝一个对象出来，并在堆内存中为其分配一个新的内存区域来存放，并且修改该对象的属性不会影响到原来的对象
 */

function deepClone(obj) {
  // 只拷贝对象
  if (typeof obj !== "object") {
    return false;
  }
  //根据obj的类型判断是新建一个数组还是对象
  let newObj = obj instanceof Array ? [] : {};
  //遍历obj，并且判断是否是obj的属性，才进行拷贝，for...in遍历所有可枚举属性
  for (let key in obj) {
    //hasProperty判断是否是自身的属性
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}

let arr = { 1: { 2: { 3: null } } };
let arrC = deepClone(arr);

arr[1] = 1;
console.log(arrC);

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

const deepClone = function(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
};

let a = {
  b: {
    c: 1
  }
};

console.log(deepClone(a));
