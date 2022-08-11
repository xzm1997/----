function getPwdRank(szPwd) {
  if (szPwd.length < 8) {
    return 0;
  }

  let numTest = new RegExp('[0-9]');
  let smallChaTest = new RegExp('[a-z]');
  let bigChaTest = new RegExp('[A-Z]');

  let num = numTest.test(szPwd);
  let smallCha = smallChaTest.test(szPwd);
  let bigCha = bigChaTest.test(szPwd);

  if (num && smallCha && bigCha) return 3;
  if (smallCha && bigCha) return 2;
  if (num || smallCha || bigCha) return 1;
  return 0
}


getPwdRank('123')
getPwdRank('123456789')
getPwdRank('123sadasdsadasdas');
getPwdRank('123sadasdsadAASS')
getPwdRank('ASASASasasaa')

