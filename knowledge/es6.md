# ES6

### let ，const，var 的区别

主要从变量提升，暂时性死区，重复声明，块作用域有效

1. let/const 定义的变量不会出现变量提升，而 var 定义的变量会提升
2. 相同作用域中，let 和 const 不允许重复声明，var 允许重复声明
3. const 声明变量时必须设置初始值
4. const 声明一个只读的常量，这个常量不可改变

在 JS 中，复杂数据类型，存储在栈中的是指向堆内存的地址，存在栈中的这个地址是不变的，但是存在堆中的值是可以变得。

### 模版字符串

### 箭头函数

### Symbol 类型

### 迭代器与 for of

ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性。即是一个数据结构只要具有 Symbol.iterator 属性（Symbol.iterator 方法对应的是便历器生成函数，返回的是一个可遍历器对象），那么就可以认为其是可迭代的。

可迭代对象的特点：

1. 具有 Symbol.iterator 属性，Symbol.iterator 返回的是一个遍历器对象
2. 可以使用 for...of 进行循环
3. 通过被 Array.from 转换为数组

### Set

### Map 和 WeakMap

### Promise

### Generator

### async 和 await

async 函数，就是 Generator 函数的语法糖，建立在 Promise 上，并且与所有现有的基于 Promise 的 API 兼容

1. async，声明一个异步函数
   - 自动将常规函数转换成 Promise，返回值也是一个 promise 对象
   - 只有 async 函数内部的异步操作执行完，才会执行 then 方法指定的回调函数
   - 异步函数内部可以使用 await
2. await，暂停异步的功能执行
   - 放置在 promise 调用之前，await 强制其他代码等待，直到 promise 完成并返回结果
   - 只能与 promise 一起使用，不适用与回调
   - 只能在 async 函数内使用

async/await 相比于 promise 的优势：

1. 代码读起来更加同步，
2. promise 传递中间值非常麻烦
3. 错误处理友好
4. 调试友好

解答思路：

1. 先说基本知识点，宏任务，微任务有哪些？
2. 说事件循环机制过程
3. 说 async/await 执行顺序注意，可以把 chrome 的优化

新版本的 Chrome，对 async 和 await 的执行顺序进行优化

1. await 后面跟的是同步任务，直接当作微任务处理
2. await 后面跟的是异步函数，

### class

class 通过 extend 是关键字实现继承，
static 关键字定义类的静态方法

与 ES5 继承的区别：

1. ES5 的继承，是先创造子类的实例对象 this，然后再将父类的方法添加到 this 上面
2. ES6 的继承，是先将父类实例对象的属性和方法，加到 this 上面（所以必须先调用 super 方法），然后再用子类的构造函数修改 this

### defineProperty 与 Proxy

### 模块加载方案

##### ES6 模块与 commonJS 模块的区别

https://mp.weixin.qq.com/s/Htug48ztTTIjOufNVBUkKA

区别：

- commonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
- commonJS 模块是运行时加载，ES6 模块是编译时输出接口
- ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块

共同点是都可以对引入的对象进行赋值，即对象内部属性的值进行改变。

### 装饰器

### 私有变量的实现

### 严格模式与非严格模式的区别

1. 变量必须声明后再使用；函数不能重名，不能使用 fn.caller 和 fn.arguments 获取函数调用的堆栈
2. this 不能指向全局，ES6 中顶层的 this 指向 undefined
3. 不能使用 eval 和 with
4. arguments 不能被重新赋值，不能使用 argument.callee 和 argument.caller，arguments 不会自动反映函数参数的变化
5. 保留关键字，protected，static，interface
6. 不能对只读属性赋值，不能 delete prop；不能删除不可删除的属性，不能使用前缀 0 表示八进制数
