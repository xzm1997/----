let target = {a:1,b:{c:1}};
let object1 = {b: 2};
let object2 = {c: 3};

Object.assign(target, object1, object2);
console.log(target);
object1.b = 1;
console.log(target);
