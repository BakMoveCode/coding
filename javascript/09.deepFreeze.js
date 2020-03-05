// ------------------------- mac电脑版本上，待有时间再整理-------------------------
/***
 *
 * 深冻结一个对象
 */

function deepFreeze(obj) {
  let keys = Object.getOwnPropertyNames(obj);
  keys.forEach(key => {
    var value = obj[key];
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj);
}
