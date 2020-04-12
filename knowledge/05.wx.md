# 微信小程序

https://juejin.im/post/5cc26dfef265da037b611738#heading-3

https://juejin.im/post/5b8fd1416fb9a05cf3710690?utm_source=gold_browser_extension

## 微信小程序原理

微信小程序的渲染呈现方式是：webview+原生组件

通过定制化 JSBridge，赋予 web 端更大的权限，并使用双 webview 双线程的模式隔离了 JS 逻辑与 UI 渲染，形成了特殊的开发的模式。

渲染层的界面使用了 webview 进行渲染，逻辑层采用 JSCore 线程允许 JS 脚本

逻辑层和渲染层的通信会由 Native（微信客户端）做中转，逻辑层发送网络请求也经由 Native 转发

## 微信小程序与 H5 的区别

H5 采用的是 webview 进行渲染，通过 JSBridge 完成 H5 与 Native 的双向通信，

## 微信小程序的双向绑定

原理：

1. 在渲染层把 WXML 转化称对应的 JS 对象
2. 在 JS 逻辑层发生数据变更的时候，通过宿主环境提供的 setData 方法把数据从逻辑层传递到 Native 层，再转发到渲染层
3. 经过对比前后差异，把差异应用在原来的 DOM 树上，更新界面

通过把 WXML 转化为数据，通过 Native 进行转发，来实现逻辑层和渲染层的交互和通信。

## 微信小程序的生命周期

## bindtap 和 catchtap 的区别是什么？
