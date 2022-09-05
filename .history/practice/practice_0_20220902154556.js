function testStr(str) {
  let reg1 = /^[0-9-.]+$/g
  let reg2 = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_.]+$/g
  if (reg1.test(str)) {
    return false;
  }
  if (reg2.test(str)) {
    return false;
  }
  return true;
}

console.log(testStr('123-456-7890'));
