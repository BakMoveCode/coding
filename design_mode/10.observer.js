/***
 *
 * 观察者模式（发布-订阅模式）
 * 定义了一种一对多的关系，让多个观察者对象同时监听某一个对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，
 * 使得它们能够自动更新自己
 *
 * 依靠数组关系，订阅就是放入函数，发布就是让数组里的函数执行
 *
 * 优点：
 * 1. 支持简单的广播通信，自动通知所有已经订阅过的对象
 * 2. 页面载入后目标对象很容易与观察者存在一种动态关系，增加了灵活性
 * 3. 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用
 *
 */

// 发布订阅函数，发布和订阅
function Dep() {
  // 存放函数的事件池
  this.subs = [];
}

Dep.prototype.addSub = function(sub) {
  this.subs.push(sub);
};
Dep.prototype.notify = function() {
  this.subs.forEach(sub => {
    // 绑定的方法，都有一个update方法
    sub.update();
  });
};

// 监听函数
// 通过watcher这个类创建的实例，都是拥有update方法
function Watcher(fn) {
  this.fn = fn;
}

Watcher.prototype.update = function() {
  this.fn();
};

const watcher = new Watcher(() => {
  console.log(111);
});
const dep = new Dep();
dep.addSub(watcher); // 将watcher放到数组中，watcher自带update方法
dep.addSub(watcher);
dep.notify();
