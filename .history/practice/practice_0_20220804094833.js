let str = 'aba_fcd_position_light';


let reg = new RegExp('(_)?(\w)+(_)?', 'g');
let res = reg.exec(str);
console.log(res);
