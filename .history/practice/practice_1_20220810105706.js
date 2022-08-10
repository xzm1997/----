const myNew = function(constructor, ...rest) {
  let newObj = Object.create(constructor);
  let res = newObj.apply(this, rest)
}
