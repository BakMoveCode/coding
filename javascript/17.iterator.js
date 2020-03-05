/**
 *
 * 模拟实现iterator迭代器
 *
 * Symbol.iterator属性。执行这个属性，会返回一个遍历器对象。
 * 该对象的根本特征就是具有next方法。
 * 每次调用next方法，都会返回一个代表当前成员的信息对象，具有value和done两个属性
 *
 */
let iterableObj = {
  items: [100, 200, 300],
  [Symbol.iterator]: function() {
    let _this = this;
    let i = 0;
    return {
      next: function() {
        let done = i >= _this.items.length;
        let value = !done ? _this.items[i++] : undefined;
        return {
          done: done,
          value: value
        };
      }
    };
  }
};

for (let item of iterableObj) {
  console.log(item);
}

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

let obj = {
  values: [1, 2, 3, 4, 5],
  [Symbol.iterator]: function() {
    let _this = this;
    let i = 0;
    return {
      next() {
        let done = i >= _this.values.length;
        let value = _this.values[i];
        i++;
        return {
          done,
          value
        };
      }
    };
  }
};

for (let k of obj) {
  console.log(k);
}
