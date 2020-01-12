const Jsonp = function(url, params, callback) {
  return new Promise((resolve, rejected) => {
    let script = document.createElement("script");
    window[callback] = function(data) {
      resolve(data);
      document.body.removeChild(script);
    };
    let objParams = { ...params, callback };
    let data = [];
    for (let i in params) {
      data.push(`${i} = ${params[i]}`);
    }
    script.src = `${url}?{data.jion('&')}`;
    document.body.appendChild(script);
  });
};
