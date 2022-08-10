let map = new Map();

map.set('new', 1);
map.set('static', 2);
map.set('old',3);

let res = Array.from(map)

res.sort((a, b) => a[1] - b[1]);

console.log(res);


