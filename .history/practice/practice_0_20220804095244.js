let str = 'aba_fcd_position_light';


let reg = new RegExp('(\w)+', 'g');
let res = str.match(reg);
console.log(res);
