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
