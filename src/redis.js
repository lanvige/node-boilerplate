// 读取 MySQL 示例
// https://www.npmjs.com/package/redis
import redis from 'redis';
import bluebird from 'bluebird'

let rc = bluebird.promisifyAll(redis.RedisClient.prototype);

const read1 = async() => {
  let content = await rp('http://www.baidu.com');

  return content;
}

const read2 = async() => {
  let content = await read1();

  console.log(content);
}


read2();



