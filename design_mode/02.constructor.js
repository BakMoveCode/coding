/***
 *
 * 构造函数用于创建特定类型的对象---不仅声明了使用的对象，
 * 构造函数还可以接受参数以便于第一次创建对象的时候设置对象的成员值
 *
 * 在构造函数内部，this关键字引用的是新创建的对象
 * 构造函数模式
 *
 * 应用：
 *   新建对象
 */

function Car(model, year, miles) {
  if (!(this instanceof Car)) {
    return new Car(model, year, miles);
  }
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.output = formacCar;
}

function formacCar() {
  return `${this.model}走了${this.miles}公里`;
}
