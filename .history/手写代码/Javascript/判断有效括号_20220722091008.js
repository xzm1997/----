const judge = function (str) {
  const map = {
    '{':'}',
    '[':']',
    '(':')'
  }
  const map2 = map.values
  let dir = str.split(''), list = [];
  for (let item of dir) {
    if (!map.has(item)) continue;
    list.push(map.get(item))
  }
}


let str = '[123(123)123]';
let str2 = '[1(234]212)';

console.log(judge(str), judge(str2));
