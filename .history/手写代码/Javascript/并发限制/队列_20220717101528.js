const asyncPool = async function (poolLimit, arr, fn) {
  
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
