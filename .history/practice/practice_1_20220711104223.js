var str = 'ab_cd_ef',
    reg = /_(-w)/g;
var str1 = str.replace(reg, function (a, b) {
    return b.toUpperCase();
})
