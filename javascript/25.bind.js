// ------------------------- mac电脑版本上，待有时间再整理-------------------------

/****
 *
 * Vue的双向绑定注意事项
 *
 * Objetc.defineProperty
 *
 * 1. 只能对对象进行双向绑定，对象只能代理一层，多层的需要进行轮循设置
 * 2. 数组不能通过这种方式来进行，数组是通过监控数组的函数进行双向绑定
 *
 *
 * Proxy
 * 1. 可以代理对象和数组，对象和数组都只可代理一层，多层的需要一次进行轮循
 * 2.
 *
 */
/***
 * vue的双向绑定实现
 * object.defineProperty
 * proxy
 */

// object.defineProperty
const data = {
  name: "caicai"
};

const input = document.getElementById("input");
const span = doNotTrack.getElementById("span");

Object.defineProperty(data, name, {
  set(newVal) {
    input.value = newVal;
    span.innerHtml = newVal;
  }
});

input.addEventListener("keyup", function(e) {
  data.text = e.target.value;
});

// proxy

const data = {
  name: "caicai"
};
const input = document.getElementById("input");
const span = document.getElementById("span");
const handle = {
  set(target, key, value) {
    target[key] = value;
    input.value = value;
    span.innerHtml = value;
    return value;
  }
};

const proxy = new Proxy(data, handle);

input.addEventListener("keyup", function(e) {
  proxy.name = e.target.value;
});
