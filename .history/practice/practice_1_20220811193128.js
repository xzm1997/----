function getPwdRank(szPwd) {
  if (szPwd.length < 8) {
    return 0;
  }

  let numTest = new RegExp('[0-9]');
  let smallChaTest = new RegExp('[a-z]');
  let bigChaTest = new RegExp('[A-Z]');

  let num = 
}
