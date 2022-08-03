function _new(obj, ...rest) {
  const newObj = Object.create(obj.prototype);
  const result = obj.apply(newObj, rest);
  return typeof result === 'object' ? result : newObj;
}

function _create(obj) {
  function F() {};
  F.prototype = obj;
  return new F();
}
