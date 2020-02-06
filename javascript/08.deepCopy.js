/***
 *
 * 深拷贝分2个版本，一个简单的版本，一个复杂的版本
 *
 * 简单版本：
 * 1. 判断该值是对象还是数组
 *
 * 复杂版本：
 * 1. 拷贝不同的类型，判断该值的类型来进行深拷贝，如对象，数组，函数，Set，Map，循环引用，正则表达式
 *
 * https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1#heading-5
 *
 * 复杂的版本需要主要的就是根据不同的类型进行判断
 *
 * 一般分为基本类型和引用类型
 *
 * 基本类型直接返回
 *
 * 引用类型再细分为可遍历的类型和不可遍历的类型
 *
 * 循环引用是一个特例，需要特别注意
 *
 */
const setType = "set";
const arrayType = "array";
const mapType = "map";
const objectType = "object";
const argumentsType = "arguments";

const booleanType = "boolean";
const numberType = "number";
const stringType = "string";
const dateType = "date";
const errorType = "error";
const regExpType = "regexp";
const symbolType = "symbol";
const funcType = "function";

const deepType = [arrayType, setType, mapType, objectType, argumentsType];

const getType = function(target) {
  let type = Object.prototype.toString.call(target);
  let result = type.toLowerCase().slice(8, -1);
  console.log("type:" + result);
  return result;
};

function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}
function getInit(target) {
  let Ctor = target.constructor;
  return new Ctor();
}

function cloneFunction(func) {
  // 函数这里可分为拷贝箭头函数和普通函数
  // 箭头函数没有prototype
  // 箭头函数可以直接使用eval进行拷贝，普通函数则不可以
  const funcString = Function.prototype.toString.call(func);
  const resultFun = eval(funcString);
  console.log(typeof resultFun);
  return resultFun;
}
function cloneRegExp(target) {
  let source = target.source;
  let flag = target.flags
    .split("")
    .reverse()
    .join("");
  let result = new target.constructor(source, flag);
  result.lastIndex = target.lastIndex;
  return result;
}
function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target));
}
function cloneOtherType(target, type) {
  const Ctor = target.constructor;
  switch (type) {
    case booleanType:
    case numberType:
    case stringType:
    case errorType:
    case dateType:
      return new Ctor(target);
    case regExpType:
      return cloneRegExp(target);
    case symbolType:
      return cloneSymbol(target);
    case funcType:
      return cloneFunction(target);
    default:
      return null;
  }
}

function clone(target, map = new WeakMap()) {
  // 合理的判断引用类型
  if (!isObject(target)) {
    return target;
  }

  // 获取类型
  let type = getType(target);
  // 新对象
  let newTarget;
  // 判断是否是可遍历的类型
  if (deepType.includes(type)) {
    newTarget = getInit(target);
  } else {
    return cloneOtherType(target, type);
  }

  // 判断循环引用，单独开辟一块map空间来存放，判断是否是循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, newTarget);

  // 克隆 set
  if (type === setType) {
    target.forEach(item => {
      newTarget.add(clone(item, map));
    });
    return newTarget;
  }

  // 克隆 map
  if (type === mapType) {
    target.forEach((key, value) => {
      newTarget.set(key, clone(value, map));
    });
    return newTarget;
  }

  // 克隆对象
  if (type === objectType) {
    let keys = Object.keys(target);
    keys.forEach(key => {
      newTarget[key] = clone(target[key], map);
    });
  }

  // 克隆数组
  if (type === arrayType) {
    target.forEach(item => {
      newTarget[item] = clone(target[item], map);
    });
  }

  return newTarget;
}
const map = new Map();
map.set("key", "value");
map.set("ConardLi", "code秘密花园");

const set = new Set();
set.add("ConardLi");
set.add("code秘密花园");

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child"
  },
  field4: [2, 4, 8],
  empty: null,
  map,
  set,
  bool: new Boolean(true),
  num: new Number(2),
  str: new String(2),
  symbol: Object(Symbol(1)),
  date: new Date(),
  reg: /\d+/,
  error: new Error(),
  func1: () => {
    console.log("code秘密花园");
  },
  func2: function A(a, b) {
    return a + b;
  }
};
const test = clone(target);
console.log(test);
console.log(test.func2(1, 2));
