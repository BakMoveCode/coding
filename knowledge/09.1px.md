# 移动端的 1px 解决方案

https://mp.weixin.qq.com/s/0eHZPNmt8UyaxSzMNjhS9w

## 移动端基本知识

https://juejin.im/post/5bfa99e0e51d4555557d26c6

viewport 是指用来显示网页的那部分区域

viewport 在移动端设置后，可让页面的宽度跟设备的宽度一致

css 像素，代码中使用的逻辑像素

设备像素，物理像素，控制设备显示的单位，与设备，硬件有关

分辨率，指的是屏幕上垂直和水平的总物理像素

适配的几种方案：

1. 使用 media 的媒体查询
2. 百分比
3. rem 方案
4. vw，vh 方案

rem 适配原理

rem，是一个只相对于浏览器的根元素（html 元素）的 font-size 来确定的单位。默认的 html 元素 font-size 为 12px

通过 rem 来实现适配：rem 单位都是相对于根元素 html 的 font-size 来决定大小的，
根元素的 font-size 相当于提供了一个基准，当页面的宽度发生变化时，
只需要改变 font-size 的值，那么以 rem 为固定单位的元素的大小也会发生响应的变化。
需要先动态设置 html 根元素的 font-size，再计算出其他页面元素以 rem 为固定单位的值

## 产生原因

因为屏幕的分辨率和浏览器的分辨率存在换算关系，所以 1px 的线在屏幕上会占用 2 个或者 2 个以上的视觉像素，在移动端特别明显

设备像素比：dpr=widonw.devicePixelRatio，设备的物理像素与逻辑像素的比值

在

## 0.5px 方案

缺点：

IOS7 以下和 android 等系统里，0.5px 将会被显示为 0px

## 伪类 + transform

优点：

- 所有场景都能满足，支持圆角（伪类和本体类都需要加 border-radius）

缺点：

- 代码量很大

简化版本

```
.outer {
    position: relative;
}
.outer:before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 1px;
    tansform: scale(0.5);
    tansform-origin: 0 0;
    background: #f5f5f5;
}
```

## viewport + rem

原理：

通过设置对应 viewport 的 rem 基准值，

在 devicePixelRatio=2，设置 meta

```
<meta name="viewport" content="width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">
```

在 devicePixelRatio=3 时，设置 meta

```
<meta name="viewport" content="width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no">

```

优点：

- 所有场景都能满足，一套代码，可以兼容基本所有布局

缺点：

- 老项目修改代码过大，只适用于新项目

## border-image

## background-image

## postcss-write-svg

借助于 postcss 的插件 post-write-svg 实现
