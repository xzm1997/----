const judge = function (str) {
  const map = {
    '{':'}',
    '[':']',
    '(':')'
  }
  let values = Object.values(map);
  let dir = str.split(''), list = [];
  for (let item of dir) {
    console.log(item, list, map[item]);
    if (map[item]) {
      list.push(map[item]);
    }
    if (values.indexOf(item) !== -1) {
      if (list[list.length-1] !== item) {
        return false;
      } else {
        list.pop();
      }
    }
  }
  if (list.length === 0) {
    return true;
  } else {
    return false;
  }
}


let str = '[123(123)123]';
let str2 = '[1(234]212)';

console.log(judge(str), judge(str2));
