const asyncPool = async (poolLimit, array, iteratorFn) => {
  const resultList = [];
  const executing = [];
  for (const item of array) {
    
  }
}

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
