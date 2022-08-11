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

let stuTreeList = [null, stuTree], target = [1], len = relationShip.length;

while (len) {
  for (let i = 0; i < len; ++i) {
    if (relationShip[i].indexOf(target) !== -1) {
      let temp = relationShip.splice(i, 1)[0];
      let index = temp[0] === target ? temp[1] : temp[0];
      let currentStu = {
        id: index,
        like: stuLike[index],
        children: []
      }
      stuTreeList[index] = currentStu;
      stuTreeList[target].children.push(index);
      target = index;
      console.log(relationShip);
      --len;
    }
  }
}

let res = 0;
for (let i = 1; i < stuTreeList.length; ++i) {
  // res += stuTreeList[i].children.length;
  console.log(stuTreeList[i].children.length)
}
