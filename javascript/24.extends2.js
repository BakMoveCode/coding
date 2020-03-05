/****
 *
 * https://github.com/ljianshu/Blog/issues/20
 * 继承
 *
 * 1. 原型链继承
 *    子类型的原型为父类型的一个实例对象
 *
 * 2. 借用构造函数继承
 *    子类型构造函数中通过call调用父类型构造函数
 *
 * 3. 原型链 + 借用构造函数的组合继承
 *    通过调用父类构造，继承父类的属性并保留传递参数的优点，然后通过将父类实例作为子类原型，
 *    实现函数复用
 *
 * 4. 组合继承
 *     这种方式通过父类原型和子类原型指向同一个对象，
 *
 *
 *
 */

/****
 * https://mp.weixin.qq.com/s/A9-sqn5Z-rC6YU7KSx8qzA
 * 继承
 */

// 原型链继承

function Father() {
  this.text = "text";
}

Father.prototype.someFn = function() {};

function Son() {
  this.text1 = "test1";
}

Son.prototype = new Father();

// 原型式继承

function cloneObj(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

// 寄生式继承

// 寄生组合式继承

// ES6 extends
