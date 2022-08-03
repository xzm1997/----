function currying() {
  let res = 0;
  return function Fn(...newArgs) {
    
  }
}
const curryAdd = currying(add);
console.log(curryAdd(1,2,3)(4,5)());
console.log(curryAdd(1)(2)(3,4,5)());
