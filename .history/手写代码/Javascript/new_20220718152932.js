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
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObj, arguments);
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObj;
}
