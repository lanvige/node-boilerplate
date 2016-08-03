# Node ES7 boilerplate

经常有些小的需求，以前都是用 ruby，现在想用 node 来实现，就是一些同步的小方法集。

但 js 的 callback hell 很讨厌，想用 es7 的 async 来解决。这里是一个例子。


## ES7 - async/await & import


async 表示这是一个async函数，await只能用在这个函数里面。

await 表示在这里等待 promise 返回结果了，再继续执行。

#### promise


#### import / export

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

### Babel

entry.js 中是不能使用新语法的。一定要定义在另一个新文件中。



- [Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)


Node@6 has great ES2015 support, this module just adds missing features:

- <https://github.com/jhen0409/babel-preset-es2015-node6>



## HTTP Request

https://github.com/request/request-promise



## MySQL

- <https://github.com/mysqljs/mysql/>

#### Promise

- <https://github.com/lukeb-uk/node-promise-mysql> 2.11.1
- <https://github.com/martinj/node-mysql-promise>


- [如何使用 NPM 来管理你的 Node.js 依赖](http://www.infoq.com/cn/articles/msh-using-npm-manage-node.js-dependence)
- [package.json 文件](http://javascript.ruanyifeng.com/nodejs/packagejson.html)
