const asyncPool = async (poolLimit, array, iteratorFn) => {
  const resultList = [];
  const executing = [];
  for (const item of array) {
    console.log("循环", item);
    const p = Promise.resolve().then(() => {
      console.log("初始化", item);
      return iteratorFn(item, array);
    });
    resultList.push(p);
    if (poolLimit <= array.length) {
      const e = p.then(() => {
        return executing.splice(executing.indexOf(e), 1);
      });
      executing.push(e);
      if (executing.length >= poolLimit) {
        console.log("运行Promise.race");
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(resultList);
};

// TEST
const timeout = (i) =>
  new Promise( (resolve) => {
    setTimeout(resolve, i, i)
  });

const main = async () => {
  const aa = await asyncPool(
    3,
    [10, 20, 30, 40, 50, 60, 60, 70, 80, 1000,],
    timeout
  );
  console.log("aa=>", aa);
};

main();
