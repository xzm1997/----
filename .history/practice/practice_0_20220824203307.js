function create(obj) {
  function F(){};
  F.prototype = obj;
  return F;
}
