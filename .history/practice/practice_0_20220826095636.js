function myInstanceOf (left, right) {
  let leftProto = left.__proto__, rightPrototype = right.prototype;
  while (leftProto) {
    if (leftProto === rightPrototype) {
      return true;
    }
    leftProto = leftProto.__proto__;
  }
  return false;
}


console.log(myInstanceOf([1,2,3], Array));
