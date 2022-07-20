function instanceOf(obj1, obj2) {
  let obj2Prototype = obj2.prototype, obj1Proto;
  while (obj1Proto !== obj2Prototype) {
    obj1Proto = obj1Proto.__proto__;
  }
}
