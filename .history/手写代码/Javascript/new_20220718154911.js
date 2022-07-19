function _new(obj, ...rest){
  // 基于obj的原型创建一个新的对象
  const newObj = Object.create(obj.prototype);

  // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
  const result = obj.apply(newObj, rest);

  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return typeof result === 'object' ? result : newObj;
}

作者：DenverChen
链接：https://juejin.cn/post/6844903937405878280
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
