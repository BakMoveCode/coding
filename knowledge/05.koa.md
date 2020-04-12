# KOA

https://mp.weixin.qq.com/s/1zw2mBeYPMU-2Nj3FBXB6Q

koa-demo（https://chenshenhai.com/koa2-note/note/project/start）

## 洋葱模型

https://juejin.im/post/5e53cf886fb9a07c91101642#heading-11

1. 初始化中间件，

   通过 app.use 方法将中间件 push 到 middleware 数组中，

2. 执行中间件（洋葱模型）
   通过 use 注册中间件，中间件函数有两个参数第一个是上下文，第二个是 next
   在中间件函数执行过程中，若遇到 next()，那么就会进入到下一个中间件中执行，
   下一个中间件执行完成后，在返回上一个中间件执行 next()，这便是中间件的执行逻辑。
