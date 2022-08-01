const memoize = function (fn) {

}

let add = function (a, b) {
  console.log(a, b);
  return a + b;
}

let foo = memoize(add)

foo(1, 2)
foo(1, 2)
foo(4, 3)
foo(4, 2)

// 函数记忆是指将之前计算的结果缓存起来，以后调用时。如果遇到相同的参数，就直接返回缓存中的数据，是一种经典的空间换时间的方法。
