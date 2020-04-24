# [内容安全策略](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

- 限制网页资源获取的途径
- 报告资源获取越权的情况

## 相关请求头

| 请求头                              | 功能                             |
| ----------------------------------- | -------------------------------- |
| Content-Security-Policy             | 指定内容安全策略，如果违反会阻止 |
| Content-Security-Policy-Report-Only | 指定内容安全策略，如果违反仅上报 |

## 限制的方式

- default-src限制全局资源类型
- 限制特定资源类型

## 可以在`meta`标签中设置安全策略
