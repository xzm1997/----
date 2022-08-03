// 将父类指向子类的原型。
Child.prototype = new Parent();
// 所有子类共享原型，改变一个其他也会改变
