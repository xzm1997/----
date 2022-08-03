使用构造函数继承父类参数， 使用原型继承父类函数
function Child(name) {
  Parent.call(this);
}

Child.prototype = Parent.prototype;

// 缺点：父亲原型和子类原型是同一个原型， 无法区分子类是谁构造的
