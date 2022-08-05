let str = 'aba_fcd_position_light';


let reg = new Reg('_?\w+_?', 'g');
let res = reg.exec(str);
console.log(res);
