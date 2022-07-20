const myNew = function(obj) {
  const newObj = Object.create(obj.prototype);
  const result = obj.apply(newObj, rest);
  
}
