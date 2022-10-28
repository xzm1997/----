// 字符串A、B，由数值组成，长度0-30；B作为整体插入到A的某个位置，形成新的值，返回最大的数值
function solveProblem(A, B) {
  function compare(str1, str2) {
    if (!str1) return true
    let len = str1.length > str2.length ? str2.length : str1.length;
    for (let i = 0; i < len; ++i) {
      if (parseInt(str1[i]) > parseInt(str2[i])) {
        return true;
      } else if (parseInt(str1[i]) < parseInt(str2[i])) {
        return false;
      }
    }
    if (B.length > len) return false;
    return true;
  }
  let res;
  for (let i = 0; i < A.length; ++i) {
    if (!compare(A.split(i).length?A.split(i)[0]:'', B)) {
      res = A.split(0, i) + B + A.split(i)
      return res;
    }
  }
  return A+B
}


// let A = "254323";
// let B = "198";
console.log(solveProblem("254323", "198"))
console.log(solveProblem("154323", "198"))
console.log(solveProblem("11111111", "11111111"))
// 1111;111

