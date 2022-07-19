const myNew = function(target, ...rest) {
  let newObj = Object.create(target.prototype);
  const result = obj.apply(newObj, rest);
  return typeof result === 'object' ? result : newObj;
}
