function currying() {
  let res = 0;
  return function Fn(...newArgs) {
    if (newArgs.length) {
      for (let item of newArgs) {
        res += item;
      }
      return Fn;
    } else {
      return res;
    }
  }
}
const curryAdd = currying();
console.log(curryAdd(1,2,3)(4,5)());
console.log(curryAdd(1)(2)(3,4,5)());
