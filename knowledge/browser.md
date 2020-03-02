# 浏览器

https://github.com/Advanced-Interview-Question/front-end-interview/blob/dev/docs/guide/browser.md

##### 常见的浏览器内核有哪些？

浏览器 内核（渲染引擎） Javascript 引擎

Chrome Blink（） V8
FireFox Gecko SpiderMonkey
Safari webkit JavascriptCore
IT Trident Chakra（for Jscript）

##### 浏览器的主要组成部分是什么？

1. 用户界面
2. 浏览器引擎
3. 渲染引擎
4. 网络
5. 用户界面后端
6. JavaScript 解释器
7. 数据存储

##### 浏览器是如何渲染 UI 的？

1. 浏览器获取 HTML 文件，对文件进行解析，形成 DOM Tree
2. 解析 CSS 文件，生成 Style Rules
3. 接着将 DOM Tree 与 Style Rules 生成渲染树
4. 接着进入布局阶段，计算每一个节点在屏幕上的具体坐标
5. 调用 GPU 进行绘制，遍历渲染树的节点，并将元素呈现出来

##### 浏览器是如何解析 css 选择器的？

浏览器从右往左解析 CSS 选择器
主要是因为这样解析性能更好，第一次就会筛选掉大量不合适的节点

##### DOM Tree 是如何构建的？

1. 转码，浏览器将接收到的二进制数据按照指定编码格式转化为 HTML 字符串
2. 生成 Tokens，之后开始 parser，浏览器会将 HTML 字符串解析成 Tokens
3. 构建 Nodes，对 Node 添加特定的属性，通过指针确定 Node 的父子，兄弟关系
4. 生成 DOM Tree，通过 node 包含的指针确定的关系构建出 DOM Tree

##### 浏览器的重绘与重排的区别？

重排：部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算，表现为重新生成布局，重新排列元素
重绘：由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新，表现为某些元素的外观被改变

##### 如何触发重绘与重排列？

##### 如何避免重绘或者重排列？

##### 前端如何实现即时通讯？

1. 短轮询
2. SSE
3. websocket
4. web worker

##### 什么是浏览器同源策略？

同源是指“协议+域名+端口”三者相同，即便两个不同的域名指向同一个 IP 地址，也非同源。

同源策略限制了从同一个源加载的文档或者脚本如何与来自另一个源的资源进行交互。用于隔离潜在恶意文件的重要安全机制

不受同源策略限制的：

1. <img src=xxx>
2. <link href=xxx>
3. <script src=xxx>

##### 如何实现跨域？

1. JSONP
   - 利用 script 标签不受同源策略限制的特性进行跨域操作
   - 优点：实现简单，兼容性好
   - 缺点：只支持 get 请求；有安全性问题，容易遭受 xss 攻击；需要服务端配合 jsonp 进行一定程度的改造
2. CORS（跨域资源共享）（Access-Control-Allow-Origin）
   - 使用额外的 HTTP 头来告诉浏览器让运行在一个 origin 上的 web 应用被准许访问来自不同源服务器上的指定资源
3. Nginx
   - 反向代理
   - 负载均衡
   - 高并发
4. postMessage
   - 允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本挡，多窗口，跨域消息传递
     HTML5 XMLHttpRequest 有一个 API，postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。
5. WebSocket
   是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了，因此可以跨域。
6. window.name + iframe
   window.name 属性值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值，我们可以利用这个特点进行跨域。
7. location.hash + iframe
   a.html 欲与 c.html 跨域相互通信，通过中间页 b.html 来实现。 三个页面，不同域之间利用 iframe 的 location.hash 传值，相同域之间直接 js 访问来通信。
8. document.domain + iframe
   该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式，我们只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域，两个页面都通过 js 强制设置 document.domain 为基础主域，就实现了同域。

##### 浏览器的缓存

缓存分为强缓存和协商缓存

1. 强缓存
   强缓存，在缓存有效期内，客户端直接读取本地资源文件，
   返回的状态码是 200
2. 协商缓存
   - Expires
