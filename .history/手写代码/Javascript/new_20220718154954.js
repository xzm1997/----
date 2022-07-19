function _new(obj, ...rest){
  // 基于obj的原型创建一个新的对象
  const newObj = Object.create(obj.prototype);

  // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
  const result = obj.apply(newObj, rest);

  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return typeof result === 'object' ? result : newObj;
}

function Person(firtName, lastName) {
  this.firtName = firtName;
  this.lastName = lastName;

  return {
    fullName: `${this.firtName} ${this.lastName}`
  };
}

const tb = new Person('Chen', 'Tianbao');
console.log(tb);

const tb2 = _new(Person, 'Chen', 'Tianbao');
console.log(tb2)
