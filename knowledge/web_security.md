# web 安全

https://mp.weixin.qq.com/s/rU32rVM6Q-ele01ZB3RFzg

## 同源策略

如果两个 URL 的协议，域名和端口都相同，我们就称这两个 URL 同源

同源策略限制来：

1. 限制来自不同源的 JS 脚本对当前 DOM 对象读和写的操作
2. 限制不同源的站点读取当前站点的 cookie，IndexDB，localStorage 等数据
3. 限制通过 XMLHttpRequest 等方式将站点的数据发送给不同源的站点

解决同源策略的方法：

1. 跨稳定消息机制
   通过 window.postMessage 的 JS 接口来和不同源的 DOM 进行通信
2. 跨资源共享（CORS）
   跨域资源在服务端设置允许跨域，就可以进行跨域访问控制，从而使跨域数据传输得以安全进行
3. 内容安全策略（CSP）
   主要是以白名单的形式配置可信任的内容来源，在网页中，能够使白名单中的内容正常执行（包含 JS，CSS，Image 等等），而非白名单的内容无法正常执行

## XSS

## CSRF

## SQL 注入

## 点击劫持

## window.opener 安全问题

## 文件上传漏洞
