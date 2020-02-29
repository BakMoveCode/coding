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
