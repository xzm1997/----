function myNew() {
  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  if (typeof constructor !== 'function') {
    console.log('TypeError');
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObj = Object.create(constructor.prototype);
  
}
