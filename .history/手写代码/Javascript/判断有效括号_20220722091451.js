const judge = function (str) {
  const map = {
    '{':'}',
    '[':']',
    '(':')'
  }
  let values = map.values();
  let dir = str.split(''), list = [];
  for (let item of dir) {
    if (map.has(item)) {
      list.push(map.get(item));
      continue;
    }
    if (values.indexOf(item) !== -1) {
      if (values[values.length-1] !== item) {
        return false;
      } else {
        values.pop();
      }
    }
  }
}


let str = '[123(123)123]';
let str2 = '[1(234]212)';

console.log(judge(str), judge(str2));
