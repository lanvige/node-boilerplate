// demo

const sleep = (time) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // 返回 ‘ok’
      resolve('ok');
    }, time);
  })
};

const start = async() => {
  // 在这里使用起来就像同步代码那样直观
  console.log('start');
  let result = await sleep(3000);
  console.log(result);
  console.log('end');
};


// export
export default start;
