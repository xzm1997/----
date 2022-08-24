function create(obj) {
  function F(){};
  F.prototype = obj;
  return new F();
}

function myNew(constructor, rest) {
  let newObj = Object.create(constructor.prototype);
  let res = obj.apply(newObj, rest);
  if (res && typeof res === 'object') {
    return res;
  } else {
    return newObj;
  }
}
