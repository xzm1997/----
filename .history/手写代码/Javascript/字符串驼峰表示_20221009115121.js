function stringConvert(str) {
  let dir = str.split('_');
  if (dir.length <= 1) return str;
  let res = dir[0];
  for (let i = 1; i < dir.length; ++i) {
    let strArr = dir[i].split('');
    strArr[0] = strArr[0].toUpperCase();
    res += strArr.join('');
  }
  return res;
}

console.log(stringConvert('one_two_three'));


// 下划线转驼峰
function toHump(str) {
  return str.replace(/\_(\w)/g,function(match, letter) {
    console.log()
    return letter.toUpperCase()
  })
}

// 驼峰转下划线
function humpTo(str) {
  return str.replace(/([A-Z])/g,function(match) {
    return '_' + match.toLowerCase()
  })
}

console.log(toHump('acb_gbg_poco'));
