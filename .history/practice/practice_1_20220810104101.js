let map = new Map();

map.set('new', 1);
map.set('static', 2);
map.set('old',3);

console.log(map);

for (let item of map) {
  console.log(item[0]);
}
