let target = {a:1};
let object1 = {b:{c:1}};

Object.assign(target, object1);
console.log(target);
object1.b = 1;
console.log(target);
