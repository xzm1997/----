function stringConvert(str) {
  let dir = str.split('_');
  if (dir.length <= 1) return str;
  let res = dir[0];
  for (let i = 0; i < dir.length; ++i) {
    let strArr = dir[i].split('');
    dir[0].toUpperCase();
    res += strArr.join('');
  }
  return res;
}

console.log(stringConvert('one_two_three'));
