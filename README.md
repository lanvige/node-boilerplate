# Node ES7 boilerplate

经常有些小的需求写一些脚本，以前都是用 ruby，现在改用 node 来实现，都是一些同步的小方法集。

但 js 的 callback hell 很讨厌，这里用 ES 2017 的 Async Function 来解决。这里是一个例子。

**依赖 Node 7.6.0+**


## ES 2017 - Async functions & import


#### Async functions

async 表示这是一个async 函数，await 只能用在这个函数里面。

await 表示在这里等待 promise 返回结果了，再继续执行。

#### import / export

这是 ES 2015 中定义的 ES Moduel，目前仍未被原生支持，也正是这一点，需要引入 Babel。但并不妨碍我们去使用它：

```
# 命名导出
export { cube, foo };

import { cube, foo } from 'my-module.js';


# 默认导出
export default cube;

import xxx from 'my-module.js'; import 时就不用在乎以前的名字了。
```

```
# define & export

let asyncRedis = {};
asyncRedis.getCache = (key) => { };
// export
export default asyncRedis;


# import & invoke

import asyncRedis from '../../lib/async-redis'
asyncRedis.setCache(key, extensive);
```


## Babel

entry.js 中是不能使用新语法的。一定要定义在另一个新文件中。

- [Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)


Node@6 has great ES2015 support, this module just adds missing features:

- <https://github.com/jhen0409/babel-preset-es2015-node6>


## 其它的依赖：

### HTTP Request

https://github.com/request/request-promise



### MySQL

- <https://github.com/mysqljs/mysql/>

#### Promise

- <https://github.com/lukeb-uk/node-promise-mysql> 2.11.1
- <https://github.com/martinj/node-mysql-promise>


- [如何使用 NPM 来管理你的 Node.js 依赖](http://www.infoq.com/cn/articles/msh-using-npm-manage-node.js-dependence)
- [package.json 文件](http://javascript.ruanyifeng.com/nodejs/packagejson.html)
