let obj = {
  value: [1, 2, 3, 4, 5, 6],
  [Symbol.iterator]: function() {
    let _this = this;
    let i = 0;
    return {
      next() {
        let value = _this.value[i];
        let done = i >= _this.value.length;
        i++;
        return {
          value,
          done
        };
      }
    };
  }
};

for (let k of obj) {
  console.log(k);
}
