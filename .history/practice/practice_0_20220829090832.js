function myCreate (constructor) {
  function f() {};
  F.prototype = constructor;
  return new f();
}
