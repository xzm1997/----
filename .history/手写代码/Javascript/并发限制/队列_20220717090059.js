


const main = async () => {
  const aa = await asyncPool(
    3,
    [10, 20, 30, 40, 50, 60, 60, 70, 80, 1000,],
    timeout
  );
  console.log("aa=>", aa);
};

main();
