/**
 * bind方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用
 * 特点：
 * 1. 返回一个新的函数
 * 2. 可以传入参数
 * function.bind(thisArg[,arg1[,arg2[, ...]]])
 *
 * 注意：bind返回的函数最为构造函数的时候，bind时指定的this值会失效，但传入的参数依然生效
 * 当作为构造函数时，this指向实例，此时结果为true，将绑定函数的this指定该实例，可以让实例获得来自绑定函数的值
 */

// 第一版
Function.prototype.bind1 = function(context) {
  var self = this;
  return function() {
    return self.apply(context);
  };
};
// 第二版
Function.prototype.bind2 = function(ctx) {
  if (typeof this !== "function") {
    return;
  }
  let _this = this;

  //获取bind2函数从第二个参数到最后一个参数
  let args = Array.prototype.slice.call(arguments, 1);

  return function() {
    let bindArgs = Array.prototype.slice.call(arguments);

    return _this.apply(ctx, args.concat(bindArgs));
  };
};

// 第三版
// let fn = func.bind(obj, ...args)
Function.prototype.bind3 = function(ctx, ...args1) {
  let _this = this;
  if (_this === Function.prototype) {
    return false;
  }
  return function F(...args2) {
    // 判断是否用于构造函数
    if (this instanceof F) {
      return new _this(...args1, ...args2);
    }
    _this.apply(ctx, args1.concat(args2));
  };
};

// const fn = func.bind(obj, ...args1)
//let obj = new fn(...args2)
// 一个绑定函数也能使用new操作符创建对象，这种行为就像把原函数当做构造函数。
// 提供的this值被忽略，同时调用的参数也被提供给模拟函数
// 当bind返回的函数作为构造函数的时候，bind时指定的this值会失效，但传入的参数依然生效
Function.prototype.bind4 = function(ctx, ...args1) {
  let self = this;

  const funA = function() {};
  const funB = function(...args2) {
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof funB ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    // return self.apply(this instanceof funB ? this : context, args.concat(bindArgs));
    return self.apply(this instanceof funB ? this : ctx, args1.concat(args2));
  };
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  funA.prototype = this.prototype;
  funB.prototype = new funA();
  return funB;
};

// ------------------------- mac电脑版本上，待有时间再整理

Function.prototype.bind2 = function(obj, ...args1) {
  if (typeof this !== "function") {
    return false;
  }
  let _this = this;
  return function Fn2(...args2) {
    if (this instanceof Fn2) {
      _this.apply(this, args1.concat(args2));
    } else {
      _this.apply(obj, args1.concat(args2));
    }
  };
};

// 没有测试通过啊
Function.prototype.bind2 = function(ctx, ...args1) {
  if (typeof this !== "function") {
    return false;
  }
  let _this = this;

  const aFun = function(args2) {
    if (this instanceof aFun) {
      _this.apply(this, args1.concat(args2));
    } else {
      _this.apply(ctx, args1.concat(args2));
    }
  };
  const bFun = function() {};
  bFun.prototype = this.prototype;
  aFun.prototype = new bFun();
  return aFun;
};
