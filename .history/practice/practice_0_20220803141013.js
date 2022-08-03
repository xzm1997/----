function currying(fn) {

}

function add(arr) {
  return arr.reduce((a, b) => a + b);
}


const curryAdd = currying(add);
console.log(curryAdd(1,2,3)(4,5)());
