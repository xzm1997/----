function currying(fn) {
  let args = []
  return function temp(...args) {
    if (args.length) {
      args
    } else {

    }
  }
}



let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15
