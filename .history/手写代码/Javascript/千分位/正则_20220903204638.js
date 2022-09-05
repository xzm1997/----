let str='1234567'
function convertMoney(str){
    let reg=/\d{1,3}(?=(\d{3})+$)/g;
    let newarr=str.replace(reg,'$&,')
    return newarr
}
console.log(convertMoney(str))
