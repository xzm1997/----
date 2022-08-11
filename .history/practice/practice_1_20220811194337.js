function getPwdRank(szPwd) {
  if (szPwd.length < 8) {
    return 0;
  }

  let numTest = new RegExp('[0-9]');
  let smallChaTest = new RegExp('[a-z]');
  let bigChaTest = new RegExp('[A-Z]');
  let otherTest = new RegExp('[^0-9]');

  let num = numTest.test(szPwd);
  let smallCha = smallChaTest.test(szPwd);
  let bigCha = bigChaTest.test(szPwd);

  if (num && smallCha && bigCha) return 3;
  if (smallCha && bigCha) return 2;
  if ((smallCha && num) || (num && bigCha)) return 1;
  return 0
}


console.log(getPwdRank('123a'))
console.log(getPwdRank('123456789'))
console.log(getPwdRank('123sadasdsadasdas'))
console.log(getPwdRank('123sadasdsadAASS'))
console.log(getPwdRank('ASASASasasaa'))

