// 读取 MySQL 示例
// MySQL: https://github.com/mysqljs/mysql
// mysql promise: https://github.com/martinj/node-mysql-promise

import rp from 'request-promise';


const read1 = async() => {
  let content = await rp('http://www.baidu.com');

  return content;
}

const read2 = async() => {
  let content = await read1();

  console.log(content);
}


read2();



