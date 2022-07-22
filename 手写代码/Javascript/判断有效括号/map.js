const judge = function (str) {
  const map = new Map();
  map.set('{', '}');
  map.set('[', ']');
  map.set('(', ')');
  let values = [...map.values()], queue = [];
  let dir = str.split('');
  for (let item of dir) {
    if (map.has(item)) {
      queue.push(map.get(item));
    }
    if (values.indexOf(item) !== -1) {
      if (queue.indexOf(item) !== queue.length-1) return false;
      queue.pop();
    }
  }
  if (queue.length) return false;
  else return true;
}


let str = '[123(123)123]';
let str2 = '[1(234]212)';
let str3 = '[123'

console.log(judge(str), judge(str2), judge(str3));
