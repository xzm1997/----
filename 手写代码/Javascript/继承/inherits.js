function inherits(child, parent) {
  child.super_ = parent;
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false, // 否可枚举(enumerable)
      writable: true,  // 可写(writable)之类的
      configurable: true, //当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
    }
  })

}
