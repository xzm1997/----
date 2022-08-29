function myCreate (obj) {
  function f() {};
  F.prototype = obj;
  return new f();
}

function myNew (constructor, ...rest) {
  let newObj = Object.create(constructor);
  let res = constructor.apply(newObj, rest);
  if (res && typeof res === 'object') {
    return res;
  } else {
    return newObj;
  }
}
