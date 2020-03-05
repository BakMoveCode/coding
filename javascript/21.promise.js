// http://www.conardli.top/docs/JavaScript/%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0promise.html#%E5%9F%BA%E7%A1%80%E7%89%88%E6%9C%AC
/**
 *
 * https://juejin.im/post/5dc383bdf265da4d2d1f6b23
 *
 *
 * Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由js引擎提供，不用自己部署
 *
 * resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
 *
 * reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去
 *
 * Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
 */

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "reject";

function myPromise(executor) {
  this.status = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];
  const resolve = value => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach(fun => {
        fun();
      });
    }
  };
  const reject = reason => {
    if (this.status === REJECTED) {
      this.status = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach(fun => {
        fun();
      });
    }
  };

  try {
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
  // if (typeof onFulfilled !== 'function') {
  //   onFulfilled = function(value) {
  //     return value;
  //   };
  // }
  // if (typeof onRejected !== 'function') {
  //   onRejected = function(reason) {
  //     throw reason;
  //   };
  // }
  switch (this.status) {
    case FULFILLED:
      setTimeout(() => {
        onFulfilled(this.value);
      }, 0);
      break;
    case REJECTED:
      setTimeout(() => {
        onRejected(this.value);
      }, 0);
      break;
    case PENDING:
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          onFulfilled(this.value);
        }, 0);
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          onRejected(this.value);
        }, 0);
      });
      break;
  }
};

myPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
};

myPromise.prototype.finally = function(fn) {
  return this.then(
    value => {
      fn();
      return value;
    },
    reason => {
      fn();
      throw reason;
    }
  );
};

//测试代码
console.log(1);
let promise = new myPromise((resolve, reject) => {
  resolve("ConardLi");
});
promise.then(value => {
  console.log(value);
});
console.log(2);

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

const PENDING = "PENGDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

function myPromise(executor) {
  this.status = PENDING;
  this.value = null;
  this.reason = null;

  this.onFulfillCallback = [];
  this.onRerejectedCallback = [];

  const resolve = function(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      onFulfillCallback.forEach(item => {
        item(value);
      });
    }
  };

  const reject = function(reason) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      onRerejectedCallback.forEach(item => {
        item(reason);
      });
    }
  };
  try {
    executor(resolve, reject);
  } catch (e) {}
  reject(e);
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
  switch (this.status) {
    case PENDING:
      this.onFulfillCallback.push(() => {
        setTimeout(() => {
          onFulfilled(this.value);
        }, 0);
      });
      this.onRerejectedCallback.push(() => {
        setTimeout(() => {
          onRejected(this.reason);
        }, 0);
      });
      break;
    case FULFILLED:
      setTimeout(() => {
        onFulfilled(this.value);
      }, 0);
      break;
    case REJECTED:
      setTimeout(() => {
        onRejected(this.reason);
      }, 0);
      break;
  }
};

myPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
};

myPromise.prototype.finally = function(fn) {
  return this.then(
    value => {
      fn();
      return value;
    },
    reason => {
      fn();
      return reason;
    }
  );
};

myPromise.resolve = function(value) {
  return new myPromise((resolve, rejecte) => {
    resolve(value);
  });
};

myPromise.reject = function(reason) {
  return new myPromise((resolve, reject) => {
    reject(reason);
  });
};
