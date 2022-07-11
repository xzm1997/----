function stringConvert(str) {
  let dir = str.split('_');
  if (dir.length <= 1) return str;
  let res = dir[0];
  for (let i = 0; i < dir.length; ++i) {
    
  }
  return res;
}

console.log(stringConvert('one_two_three'));
