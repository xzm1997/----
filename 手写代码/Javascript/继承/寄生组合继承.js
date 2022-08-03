// 在组合继承的基础上，子类继承一个由父类原型生成的对象。
function Child(name) {
  Parent.call(this);
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child
  }
})
