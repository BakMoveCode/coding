/**
 * https://github.com/ljianshu/Blog/issues/55
 * JSONP的实现流程
 * 声明一个回调函数，其函数名(如show)当做参数值，要传递给跨域请求数据的服务器，函数形参为要获取目标数据(服务器返回的data)。
 * 创建一个<script>标签，把那个跨域的API数据接口地址，赋值给script的src,还要在这个地址中向服务器传递该函数名（可以通过问号传参:?callback=show）。
 * 服务器接收到请求后，需要进行特殊的处理：把传递进来的函数名和它需要给你的数据拼接成一个字符串,例如：传递进去的函数名是show，它准备好的数据是show('我不爱你')。
 * 最后服务器把准备的数据通过HTTP协议返回给客户端，客户端再调用执行之前声明的回调函数（show），对返回的数据进行操作。
 */

function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    // 创建script标签
    let script = document.createElement("script");
    window[callback] = function(data) {
      resolve(data);
      // 移除标签
      document.body.removeChild(script);
    };
    params = { ...params, callback };
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join("&")}`;
    // 添加标签
    document.body.appendChild(script);
  });
}

jsonp({
  url: "",
  params: {},
  callback: "show"
}).then(data => {
  console.log(data);
});

function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");

    window[callback] = function(data) {
      resolve(data);
      document.body.removeChild(script);
    };

    params = { ...params, callback };

    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params.key}`);
    }
    script.src = `${url}?${arrs.join("&")}`;
    document.body.appendChild(script);
  });
}

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

/****
 *
 * JSONP的原理
 *
 * 尽管浏览器有同源策略，但是<script>标签的src属性不会被同源策略所约束，可以获取任意服务器上的脚本并执行。
 * JSOPN通过插入script标签的方式来实现跨域，参数只能通过url传入，仅仅能支持get请求
 *
 * 实现原理：
 * 1. 创建callback方法
 * 2. 插入script标签
 * 3. 后台接受到请求，解析前端传过去的callback方法，返回该方法的调用，并且数据作为参数传入该方法
 * 4. 前端执行服务端返回的方法调用
 *
 */

const Jsonp = function(url, params, callback) {
  return new Promise((resolve, rejected) => {
    // 创建script标签
    let script = document.createElement("script");
    // 将回调函数挂在window上
    window[callback] = function(data) {
      resolve(data);
      // 代码执行后，删除插入的script标签
      document.body.removeChild(script);
    };
    // 将回调函数加在请求地址上
    let objParams = { ...params, callback };
    let data = [];
    for (let i in params) {
      data.push(`${i} = ${params[i]}`);
    }
    script.src = `${url}?{data.jion('&')}`;
    document.body.appendChild(script);
  });
};
