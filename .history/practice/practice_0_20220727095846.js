const test = function(a, b, ...rest) {
  console.log(Array.isArray(rest));
}

test(1,2,3,4,5);
