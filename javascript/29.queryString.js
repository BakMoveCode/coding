/***
 *
 * https://juejin.im/post/5e57048b6fb9a07cc845a9ef
 *
 * Node.js中有一个queryString模块，可以实现将urlStr主机地址后面的参数转化为对象
 * let urlStr = 'http://www.inode.club?name=koala&study=js&study=node';
 * 转换结果为：{ name: 'koala', study: [ 'js', 'node' ] }
 *
 */

let urlStr = "http://www.inode.club?name=koala&study=js&study=node";
// 参数转成对象
function queryString(request) {
  let params = request.split("?")[1];
  let param = params.split("&");
  let obj = {};
  for (let i = 0; i < param.length; i++) {
    let paramsA = param[i].split("=");
    let key = paramsA[0];
    let value = paramsA[1];
    if (obj[key]) {
      obj[key] = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
console.log(queryString(urlStr));
