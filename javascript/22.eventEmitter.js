/***
 *
 * 观察者模式（发布-订阅模式）
 * 类似于微信平台订阅了公众号，当他有新的文章发表后，就会推送给我们所有订阅的人
 * 定义了一种一对多的关系，让多个观察者对象同时监听某一个对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己
 * 理解：依靠数组关系，订阅就是放入数组内，发布就是让数组里的函数执行
 *
 * 优点：
 * 1. 支持简单的广播通信，自动通知所有已经订阅过的对象
 */

function EvenEmitter() {
  this._maxListeners = 10;
  this._events = Object.create(null);
}

// 向事件队列添加事件
// prepend为true表示向事件队列头部添加事件
EvenEmitter.prototype.addListener = function(type, listener, prepend) {
  if (!this._events) {
    this._events = Object.create(null);
    if (this._events[type]) {
      if (prepend) {
        this._events[type].unshit(listener);
      } else {
        this._events[type].push(listener);
      }
    } else {
      this._events[type] = [listener];
    }
  }
};

//移除某个事件
EvenEmitter.prototype.removeListener = function(type, listener) {
  if (Array.isArray(this._events[type])) {
    if (!listener) {
      delete this._events[type];
    } else {
      this._events[type] = this._events[type].filter(
        e => e !== listener && e.origin !== listener
      );
    }
  }
};

//向事件队列添加事件，只执行一次
EvenEmitter.prototype.once = function(type, listener) {
  const only = (...args) => {
    listener.apply(this, args);
    this.removeListener(type, listener);
  };
  only.origin = listener;
  this.addListener(type, only);
};

// 执行某类事件
EvenEmitter.prototype.emit = function(type, ...args) {
  if (Array.isArray(this._events[type])) {
    this._events[type].forEach(fn => {
      fn.apply(this, args);
    });
  }
};

//设置最大事件监听个数
EvenEmitter.prototype.setMaxListeners = function(count) {
  this._maxListeners = count;
};
