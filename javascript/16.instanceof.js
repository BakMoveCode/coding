/***
 *
 * a instanceof Object
 * 判断object的prototype是否在a的原型链上
 *
 */

function myInstanceof(target, origin) {
  const proto = target.__proto__;
  if (proto) {
    if (origin.prototype === proto) {
      return true;
    } else {
      return myInstanceof(proto, origin);
    }
  } else {
    return false;
  }
}

let test = ["1"];
console.log(test instanceof Array);
console.log(myInstanceof(test, Array));

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

const myInstanceof = function(target, source) {
  let proto = target.__proto__;
  if (proto) {
    if (proto === source.prototype) {
      return true;
    } else {
      myInstanceof(proto, source);
    }
  } else {
    return false;
  }
};

function myInstanceof(target, source) {
  let proto = target.__proto__;
  if (proto) {
    if (proto === source.prototype) {
      return true;
    } else {
      instanceofFun(proto, source);
    }
  } else {
    return false;
  }
}

console.log(myInstanceof([], Array));
