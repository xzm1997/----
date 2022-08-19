function _create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function _new(obj, ...rest) {
  let newObj = Object.create(obj.prototype);
  let res = obj.apply(newObj, rest);
  if (typeof res === obj && res !== null) {
    return res;
  } else {
    return newObj
  }
}
