# webpack

https://juejin.im/post/5cc26dfef265da037b611738#heading-8

https://mp.weixin.qq.com/s/qIbUEFS1SUdlm8-Z8ecmmg

## webpack 的核心概念

JavaScript 的模块打包工具，通过分析模块之间的依赖，最终将所有模块打包成一份或者多份代码，供 HTML 直接使用。

webpack 仅仅提供了对 JS 的打包功能和一套文件处理机制，通过生态中的各种 loader 和 plugin 对代码进行预编译和打包。

Entry，入口文件，webpack 会从该文件开始进行分析与编译
Output，出口路径，打包后创建 bundler 的文件路径以及文件名
Module，模块，在 webpack 中任何文件都可以作为一个模块，会根据配置的不同的 Loader 进行加载和打包
Chunk，代码块，可以根据配置，将所有模块代码合并成一个或多个代码块，以便按需加载，提高性能
Loader，模块加载器，进行各种文件类型的加载与转换
Plugin，拓展插件，通过 webpack 相应的事件钩子，介入到打包过程中的任意环节，从而对代码按需修改

工作流程（加载-编译-输出）

事件流机制：

1. 通过链式调用，按顺序串起一个个 Loader
2. 通过事件流机制，让 Plugin 可以插入到整个生产过程中的每个步骤中

## Loader

因为 webpack 只能识别 JS 模块，如 css/html/图片等类型的文件并无法加载，因此需要一个对不同格式文件转换器。

工作原理：将代码进行分析，构建 AST（抽象语法树），遍历进行定向的修改后，再重新生成新的代码字符串。

如 babel-loader 的执行步骤：

1. babylon 将 ES6/ES7 代码解析成 AST
2. babel-traverse 对 AST 进行遍历转义，得到新的 AST
3. 新 AST 通过 babel-generator 转换成 ES5

## Plugin

在编译的整个生命周期中，webpack 会触发许多事件钩子，plugin 监听事件钩子，根据需求在相应的时间点对打包内容进行定向的修改。

## Mode

模式（Mode）可通过配置对象的 mode 属性进行配置，主要分为 production 和 development。

两种模式的区别是一个是为生产环境编译打包，一个是为来开发环境编译打包。

## HMR 的原理（webpack 的热更新原理）

HMR 指的是在应用程序运行过程中替换，添加，删除模块，浏览器无需刷新页面即可呈现出相应的变化。

## webpack 编译优化？

主要的优化内容：

1. 代码优化
   删除无用代码（不可能执行的代码）
   摇树优化
   （原理：根据语法的静态分析和 ES6 的模块机制，确定依赖关系）
2. 代码分割技术
   将代码分割成多分进行懒加载或异步加载，避免打包成一份后导致体积过大，影响页面的首屏加载
3. 作用域提升
   将分散的模块划分到同一个作用域中，避免了代码的重复引入，有效减少打包后的代码体积和运行时的内存消耗。
4. 编译性能优化

## 动态生成 index.html 和 bundle.js

动态生成是指在打包后的模块名称内插入 hash 值，使得每一次生成的模块具有不同的名称。
而 index.html 之所以要动态生成是因为每次打包生成的模块名称不同，所以在 html 文件内引用时也要更改 script 标签

为什么要添加 hash 值？
为了防止浏览器缓存机制阻碍文件的更新，在每次修改代码之后，文件名中的 hash 都会发生改变，强制浏览器进行刷新，获取当前最新的文件。

## 使用 source map 进行调试

1. 为什么要使用 source map？
   因为 webpack 对源代码进行打包后，会对源代码进行压缩，精简，甚至变量名替换，在浏览器中，无法对代码逐行打断点进行调试，所有需要使用 source map 进行调试。使得我们在浏览器中可以看到源代码，进而逐行打断点调试

2. 如何使用 source map？
   在配置中添加 devtool 属性，赋值为 source-map 或者 inline-source-map 即可，
   source-map：选项无法指示到源代码中的具体位置
   inline-source-map：报错信息更加具体，会指示源代码中的具体错误位置

## 常见面试题

https://juejin.im/post/5c6cffde6fb9a049d975c8c1

https://mp.weixin.qq.com/s/fGhcSP-SXz3l0Jklrv1I2w

## webpack 的劣势？

学习成本较高，新概念很多。

## webpack 和 gulp 的区别有哪些？分别适用于什么样的情形？
