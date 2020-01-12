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
