// 20160713
// 这是一个真实案例，需要对线上数据库的分值进行处理。
// https://github.com/lukeb-uk/node-promise-mysql

import mysql from 'promise-mysql';


let conn;



const connection = async() => {
  conn = await mysql.createConnection({
    host           : 'localhost',
    port           : '8889',
    user           : 'root',
    password       : 'root',
    database       :  'db',
    connectionLimit: 10
  });
}



const exec = async() => {
  console.log('===connection to db=====');
  try {
    await connection();
  } catch(e) {
    console.log(e);
  }

  try {
    let content = await conn.query('select * from users')
    console.log(content);
  } catch(e) {
    console.log('====bug====');
    console.log(e);
  }

  conn.end();
}


export default exec;



