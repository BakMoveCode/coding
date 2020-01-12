const sleep = function(i, wait) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(i);
    }, wait);
  });
};

const start = async function() {
  for (let i = 0; i < 6; i++) {
    let result = await sleep(i, 1000);
    console.log(result);
  }
};

start();
