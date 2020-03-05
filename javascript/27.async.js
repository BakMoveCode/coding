// ------------------------- mac电脑版本上，待有时间再整理-------------------------

/***
 *
 * 模拟实现async/await函数中的async
 *
 * async函数的实现原理，就是将Generator函数和自动执行器，包装在一个函数里
 */

function spawn(genF) {
  return new Promise(function(resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(
        function(v) {
          step(() => {
            return gen.next(v);
          });
        },
        function(e) {
          step(() => {
            return gen.throw(e);
          });
        }
      );
    }
    step(() => {
      return gen.next(undefined);
    });
  });
}
