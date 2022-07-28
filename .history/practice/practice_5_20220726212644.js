let subStr = 'abc';
let str = 'aabcs';

let reg = new RegExp(subStr);
console.log(reg.test(str));
