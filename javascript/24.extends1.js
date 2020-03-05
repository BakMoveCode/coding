/****
 *
 * 手动实现ES5继承
 */

function People() {
  this.type = "people";
}
People.prototype.eat = function() {
  console.log("吃东西");
};

function Man(name) {
  this.name = name;
  this.color = "black";
}

// 原型继承
// 缺点：原型是所有子类实例共享的，改变一个其他也会改变
Man.prototype = new People();

// 构造继承，在子类构造函数中调用父类构造函数
// 缺点：
function Man(name) {
  People.call(this);
}

// 组合继承
function Man(name) {
  People.call(this);
}
Man.prototype = People.prototype;

//寄生组合继承
function Man(name) {
  People.call(this);
}
Man.prototype = Object.create(People.prototype, {
  constructor: {
    value: Man
  }
});

//inherits函数

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

function People() {
  this.type = "people";
}

People.prototype.eat = function() {};

function Man(name) {
  this.name = name;
}

// 原型继承，缺点是每个子类的实例共享原型，改变一个其他也会跟着改变
Man.prototype = new People();

// 构造函数继承，缺点是需要在构造函数中调用父类，父类的原型丢失
People.call(this);

// 组合继承，调用2次父类，浪费内存，无法区分父类的构造函数和子类的构造函数
People.call(this);
Man.prototype = People.prototype;

//寄生组合继承，在组合继承上，子类继承由父类原型构造的一个空对象
Man.prototype = Object.create(People.prototype, {
  constructor: {
    value: Man
  }
});

//继承函数
function inherits(ctor, superCtor) {
  ctor._super = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor
    }
  });
}

// 组合继承的使用
function Man() {
  People.call(this);
}
inherits(Man, People);
