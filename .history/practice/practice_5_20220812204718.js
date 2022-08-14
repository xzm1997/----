function myNew(obj, ...rest) {
  let newObj = Object.create(obj.prototype);
  let res = obj.apply(newObj, rest);
  if (res && typeof res === 'object') {
    return res;
  } else {
    return newObj;
  }
}

Object.prototype.create = function(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
}
