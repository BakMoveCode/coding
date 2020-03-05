/***
 * ajax模拟实现
 * https://zhuanlan.zhihu.com/p/27776535
 */
const Ajax = function({
  url = "",
  method = "post",
  async = true,
  params = {},
  timeout = 3000
}) {
  let xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status > 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.responseText);
        } else {
          reject();
        }
      }
    };
    xhr.timeout = timeout;
    xhr.onerror = err => {
      reject(err);
    };
    let paramsArr = [];
    for (let key in params) {
      paramsArr.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      );
    }
    xhr.open(url, method, async);
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

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

/***
 *
 * ajax的模拟实现
 */

const ajax = function({ url = "", method = "get", params = {}, async = true }) {
  const xhr = new XMLHttpRequest();
  const method = method.toLocaleLowerCase() || "get";

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
      }
    };
  });
};
