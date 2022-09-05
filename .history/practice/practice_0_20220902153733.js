function testStr(str) {
  let reg1 = /^[0-9.]+$/g
  if (reg1.test(str)) {
    return false;
  }
}
