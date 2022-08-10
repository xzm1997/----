const myNew = function(constructor, ...rest) {
  let newObj = Object.create(constructor);
  let res = constructor.apply(newObj, rest)
  if (typeof res === 'object') {
    return res;
  } else {
    return newObj;
  }
}
