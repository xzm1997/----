const asyncPool = async function (poolLimit, arr, fn) {
  let res = [], executing = [];
  for (const task of arr) {
    const p = Promise.resolve().then(() => {

    })
  }
}

// Test
const targetFn = function () {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(i), i);
  })
}

const main = async function() {
  resAll = await asyncPool(
    2,
    [310,510,1000,500,200,410,320,890],
    targetFn
  )
  console.log("result => ", resAll);
}
