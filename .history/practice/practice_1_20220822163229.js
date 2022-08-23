function myNew(constructor, ...rest) {
  let newArgs = Object.create(constructor.prototype);
  let res = constructor.apply(newArgs, rest);
}
