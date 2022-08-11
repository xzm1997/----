function getPwdRank(szPwd) {
  if (szPwd.length < 8) {
    return 0;
  }

  let numTest = new RegExp('[0-9]');
  let smallChaTest = new RegExp('[a-z]');
  let bigChaTest = new RegExp('[A-Z]');
  let otherTest = new RegExp('[^\d|[^a-z]|^[A-Z]]');

  let num = numTest.test(szPwd);
  let smallCha = smallChaTest.test(szPwd);
  let bigCha = bigChaTest.test(szPwd);
  let other = otherTest.test(szPwd);

  console.log(num,smallCha,bigCha,other)

  if (num+smallCha+bigCha+other >= 3) return 3;
  if (num+smallCha+bigCha+other === 2) {
    if ((num && smallCha) || (num && bigCha)) return 2;
    else return 1;
  }
  if (num+smallCha+bigCha+other === 1) return 0;
}


// console.log(getPwdRank('123a'))
console.log(getPwdRank('123456789'))
// console.log(getPwdRank('123sadasdsadasdas'))
// console.log(getPwdRank('123sadasdsadAASS'))
// console.log(getPwdRank('ASASASasasaa'))


let otherTest = new RegExp('[^\d&[^a-z]&^[A-Z]]');
console.log(otherTest.test('a'))
