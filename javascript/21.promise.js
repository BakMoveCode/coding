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
