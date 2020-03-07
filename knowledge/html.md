# HTML

## HTML5 的新特性

https://juejin.im/post/5be8d817e51d457f7a4aba13

https://juejin.im/post/5bea349a518825170d1a9db1

1. 语义化标签
2. 新表单类型
3. 视频和音频
4. Canvas 绘图
5. SVG
6. 拖放（DRAG 和 drop）
7. 地理位置
8. 离线存储
9. web 存储
10. websocket
11. web works

记忆点：

1. 标签 --- 语义化标签，新表单类型
2. 新添加 --- 视频和音频，canvas 绘图，svg，拖放（DRAG 和 drop），地理位置
3. 3w --- webSocket， webWorks， web 存储和离线存储

## 前端如何进行 SEO 优化

1. 合理的 title，description，keywords：搜索对着三项的权重逐个减小
2. 语义化的 html 代码，符合 W3C 规范，语义化代码让搜索引擎容易理解网页
3. 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，保证重要内容一定会被抓取
4. 重要内容不要用 JS 输出
5. 少用 iframe
6. 非装饰性图片必须加 alt
7. 提高网站速度

前端后分离的项目如何 SEO？

1. 使用 prerender
2. 先去 www.baidu.com/robots.txt 找出常见的爬虫，然后在 nginx 上判断来访问页面用户的 User-Agent 是否是爬虫，如果是爬虫，就用 nginx 方向代理到我们自己用 nodejs + puppeteer 实现的爬虫服务器上，然后用你的爬虫服务器爬自己的前后端分离的前端项目页面，增加扒页面的接收延时，保证异步渲染的接口数据返回，最后得到了页面的数据，返还给来访问的爬虫即可。
