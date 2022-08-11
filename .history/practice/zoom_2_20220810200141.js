const read_line = require('readline-sync')
let stuNum = read_line.question("")

let stuLike = read_line.question("").split('');
let relationShip = [];
for (let i = 0; i < stuLike.length-1; ++i) {
  let temp = read_line.question("").split(' ').map(item => parseInt(item))
  relationShip.push(temp);
}

let stuTree = {
  id: 1,
  like: stuLike[0],
  children: []
}

while (relationShip.length) {
  
}
