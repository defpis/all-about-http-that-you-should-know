# http 长连接

## 浏览器默认连接数

同时只能存在6个http连接

## 所涉及的请求头

| 请求头     | 作用             | 可选值           | 示例                |
| ---------- | ---------------- | ---------------- | ------------------- |
| Connection | 决定是否保持连接 | close/keep-alive | keep-alive｜        |
| Keep-Alive | 保持连接的配置   | timeout, max     | timeout=5, max=1000 |
