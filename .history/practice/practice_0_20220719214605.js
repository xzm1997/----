function instanceOf(obj1, obj2) {
  let obj2Prototype = obj2.prototype, obj1Proto = obj1.__proto__;
  while (obj1Proto !== obj2Prototype) {
    obj1Proto = obj1Proto.__proto__;
    if (obj1Proto === null) return false;
  }
  return true;
}


console.log(instanceOf({}, Array));
