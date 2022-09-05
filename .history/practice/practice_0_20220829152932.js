// 下划线转驼峰
function toHump(str) {
  return str.replace(/\_(\w)/g,function(match, letter) {
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
