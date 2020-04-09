# cookie 和 session

## cookie

HTTP 是无状态的：每一个请求完全独立，与其他请求没有联系。但是实际业务常常需要一种机制来记住状态，比如用户是否已通过认证。服务器需要针对不同状态采取不同逻辑处理，cookie 便是为了解决这个问题产生的。每次请求时浏览器会自动在请求头中携带同源的 cookie 发送到服务器，服务器通过 cookie 来识别和维护不同连接之间存在的状态信息。

cookie 通过 Response 中的请求头`Set-Cookie`来设置，像这样

```text
Set-Cookie: id=123; max-age=2
```

在 node.js 中，通过设置请求头实现

```typescript
res.writeHead(200, {
  'Content-Type': 'application/json',
  // 需要指定允许的域
  'Access-Control-Allow-Origin': 'http://localhost:4000',
  // 使用简单请求不需要是指跨域方法
  // 需要允许证书以设置cookie到浏览器
  'Access-Control-Allow-Credentials': 'true',
  // 设置cookie，使用数组以同时设置多个，配置间使用分好分隔
  'Set-Cookie': ['id=123;max-age=2', 'name=hello;domain=test.com'],
});
```

发送请求需要注意一点：fetch 默认不会携带上 cookie，需要额外指定`credentials: 'include'`

```javascript
fetch('http://localhost:4001', {
  method: 'GET',
  credentials: 'include',
}).then(() => {
  console.log(document.cookie);
});
```

一些 cookie 的配置属性

| 名称     | 功能                                |
| -------- | ----------------------------------- |
| max-age  | 有效时间                            |
| expires  | 有效时间                            |
| Secure   | 仅在 https 请求发送                 |
| HttpOnly | 避免通过 document.cookie 访问       |
| domain   | 实现低级域名共享高级域名下的 cookie |

## session

session 意为会话，其实就是管理状态。有不同的实现方案，cookie 只是其中一种。
