/**
 * https://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html
 * 单例模式
 * 单例就是保证一个类只有一个实例
 *
 * 应用：Vuex中的store
 */

// 方式一
var Singleton = function(name) {
  this.name = name;
};

Singleton.getInstance = (function(name) {
  var instance;
  return function(name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

var a = Singleton.getInstance("aaaaaa");
var b = Singleton.getInstance("bbbbbb");

console.log(a === b);

// 方式二

function Universe() {
  if (typeof Universe.instance === "object") {
    return Universe.instance;
  }

  Universe.instance = this;
  return Universe.instance;
}

let uni1 = new Universe();
let uni2 = new Universe();

console.log(uni1 === uni2);
