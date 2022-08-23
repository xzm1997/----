function myNew(constructor, ...rest) {
  const newObj = Object.create(constructor);
  const res = constructor.apply(newObj, rest)
  if (res && typeof res === 'object') {
    return res;
  } else {
    return newObj;
  }
}

function myCreate(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
}
