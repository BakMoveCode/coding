# nginx

https://zhuanlan.zhihu.com/p/108031600

http://www.conardli.top/blog/article/前端工程化/前端开发者必备的nginx知识.html#静态资源服务器

是一款高性能的 HTTP 和反向代理服务器

## nginx 的进程模型

nginx 服务器，正常运行过程中：

多进程：一个 Master 进程，多个 worker 进程

Master 进程（管理 worker 进程）：

1. 对外接口，接收外部的操作（信号）
2. 对内转发，根据外部的操作的不同，通过信号管理 worker
3. 监控，监控 worker 进程的运行状态，worker 进程异常终止后，自动重启 worker 进程

worker 进程（所有 worker 进程都是平等的）：

1. 实际处理：网络请求，由 worker 进程处理
2. worker 进程数量：在 nginx.conf 中配置，一般设置为核心数，充分利用 CPU 资源，同时，避免进程数量过多，避免进程竞争 CPU 资源，增加上下文切换的损耗

## nginx 的事件处理模型

## nginx 的模块化体系结构

根据功能分为以下类型：

1. event modules
2. phase handle
3. output filter
4. upstream
   反向代理
5. load-balancer
   负载均衡模块，实现特定的算法，在众多的后端服务器中，选择一个服务器出来作为某个请求的转发服务器

## nginx 是什么

## nginx 的优点

1. 跨平台，配置简单
2. 非阻塞，高并发连接
3. 异步非阻塞事件处理机制：运用了 epoll 模型，提供了一个队列，排队解决
4. 高并发

## 配置说明

https://wenjs.me/p/note-of-nginx-configure

1. include 指令
   include 用于拆分配置文件，以便于增强配置文件的可读性，使得部分配置文件可以重新使用

2. server 部分

3. location 指令（反向代理的配置）
   location 指令可以用在 server 部分，提供来自客户端的 URI 或者内部的重定向
   proxy_pass 指令，反向代码的设置

4. valid_referers 指令
   valid_referers 用来校验 http 请求头 referer 是否有效

5. try_files 指令
   try_files 指令可以用在 server 部分

6. upstream 模块（负载均衡的配置）
   upstream 指令启用一个新的配置区段，在该区段定义一组上游服务器。

   upstream 模块能够使用 3 种负载均衡算法：轮询，IP 哈希，最少连接数

   轮询：默认情况下使用轮询算法，不需要配置指令来激活它，它是基于在队列中谁是下一个的原理确保访问均匀地分布到每个上游服务器；
   IP 哈希：通过 ip_hash 指令来激活，Nginx 通过 IPv4 地址的前 3 个字节或者整个 IPv6 地址作为哈希键来实现，同一个 IP 地址总是能被映射到同一个上游服务器；
   最少连接数：通过 least_conn 指令来激活，该算法通过选择一个活跃数最少的上游服务器进行连接。如果上游服务器处理能力不同，可以通过给 server 配置 weight 权重来说明，该算法将考虑到不同服务器的加权最少连接数。

## 常见使用场景

1. 使用 SSL 对流量进行加密

2. 跨域问题

```
server {
  listen 80;
  server_name api.xxx.com;

  add_header 'Access-Control-Allow-Origin' '*';
  add_header 'Access-Control-Allow-Credentials' 'true';
  add_header 'Access-Control-Allow-Methods' 'GET,POST,HEAD';

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host  $http_host;
  }
}
```

3. 反向代理

4. 透明代理
