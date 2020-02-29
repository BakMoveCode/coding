# ES6

##### let ，const，var 的区别

主要从变量提升，暂时性死区，重复声明，块作用域有效

1. let/const 定义的变量不会出现变量提升，而 var 定义的变量会提升
2. 相同作用域中，let 和 const 不允许重复声明，var 允许重复声明
3. const 声明变量时必须设置初始值
4. const 声明一个只读的常量，这个常量不可改变

在 JS 中，复杂数据类型，存储在栈中的是指向堆内存的地址，存在栈中的这个地址是不变的，但是存在堆中的值是可以变得。

##### 模版字符串

##### 箭头函数

##### Symbol 类型

##### 迭代器与 for of

ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性。即是一个数据结构只要具有 Symbol.iterator 属性（Symbol.iterator 方法对应的是便历器生成函数，返回的是一个可遍历器对象），那么就可以认为其是可迭代的。

可迭代对象的特点：

1. 具有 Symbol.iterator 属性，Symbol.iterator 返回的是一个遍历器对象
2. 可以使用 for...of 进行循环
3. 通过被 Array.from 转换为数组

##### Set

##### Map 和 WeakMap

##### Promise

##### Generator

##### async 和 await

##### class

##### defineProperty 与 Proxy

##### 模块加载方案

##### 装饰器

##### 私有变量的实现
