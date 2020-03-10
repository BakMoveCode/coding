/***
 * ajax模拟实现
 * https://zhuanlan.zhihu.com/p/27776535
 *
 * 1. 创建XMLHttpRequest()实例
 * 2. 返回promise对象
 * 3. 添加需要传递的参数，请求方法，处理错误信息
 * 4. 处理返回的状态遍历（正确和错误）
 *
 */
const Ajax = function({
  url = "",
  method = "post",
  async = true,
  params = {},
  timeout = 3000
}) {
  // 1. 实例化
  let xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    // 2. open用于初始化，但是不会真正的请求
    xhr.open(url, method, async);

    // 处理正确的状态变化
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status > 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.responseText);
        } else {
          reject();
        }
      }
    };
    // 处理错误的状态变化
    xhr.onerror = err => {
      reject(err);
    };
    //设置超时
    xhr.timeout = timeout;
    // url参数转换
    let paramsArr = [];
    for (let key in params) {
      paramsArr.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      );
    }

    // send方法发送请求，并接受一个可选参数
    if (method === "get") {
      xhr.send();
    } else {
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded;charset=UTF-8"
      );
      xhr.send(paramsArr.join("&"));
    }
  });
};
