function myNew(constructor, ...rest) {
  const newObj = Object.create(constructor);
  const res = constructor.apply(newObj, rest)
  if (res && typeof res)  
}
