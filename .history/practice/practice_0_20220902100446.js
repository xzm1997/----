function myNew(constructor, ...rest) {
  let newObj = Object.create(constructor);
  let res = constructor.apply(newObj, rest);
  if (res && res instanceof Object) {
    return res;
  } else {
    return newObj;
  }
}

function myCreate(obj) {
  function F(){}
  F.prototype = obj;
  return new F();
}
