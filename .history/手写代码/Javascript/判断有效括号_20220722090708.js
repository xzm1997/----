const judge = function (str) {
  const map = {
    '{':'}',
    '[':']',
    '(':')'
  }
  let dir = str.split('');
}


let str = '[123(123)123]';
let str2 = '[1(234]212)';

console.log(judge(str), judge(str2));
