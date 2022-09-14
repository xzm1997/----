function judge (str) {
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
  if (queue.length) {
    if (map.has(queue[0])) {
      console.log(map.get(queue[0])+','+str.length);
    } else {
      
    }
  }
}
