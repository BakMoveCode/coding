const Ajax = function({
  url = "",
  method = "",
  async = true,
  params = {},
  timeout = 3000
}) {
  let xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    // 4.
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
    xhr.onerror = error => {
      reject(error);
    };
    let paramArr = [];
    for (let param in params) {
      paramArr.push(`${key}=${param[key]}`);
    }
    xhr.open(url, method.async);
    if (method === "get") {
      xhr.send();
    } else {
      xhr.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded;charset=UTF-8"
      );
    }
    xhr.send(paramArr.join("&"));
  });
};
