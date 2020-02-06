/***
 *
 * 单例模式
 *
 * 单例就是保证一个类只有一个实例
 *
 * 应用：
 *  Vuex中的store
 */

// 方式一

const Singleton = function(name) {
  this.name = name;
};

Singleton.getInstance = (function(name) {
  let instance;
  return function(name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

let a = Singleton.getInstance("aaaaa");
let b = Singleton.getInstance("bbbbbb");

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
