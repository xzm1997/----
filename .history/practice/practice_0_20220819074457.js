function _create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function _new(obj) {
  let newObj = Object.create(obj.prototype);
  let res = 
}
