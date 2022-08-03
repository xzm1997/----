// 在子类构造函数中调用父类构造函数

function Child(name) {
  Parent.call(this);
}
// 缺点：不能继承父类原型， 函数在构造函数中，每个子类实例不能共享函数
