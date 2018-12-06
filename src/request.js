// 操作网络示例

import rp from 'request-promise';


const read1 = async() => {
  let content = await rp('http://www.baidu.com');

  console.log("read1");
  return content;
}

const req = async() => {
  let content = await read1();

  console.log(content);
}

export default req;




