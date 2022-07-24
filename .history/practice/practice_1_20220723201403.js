let num = 20
let input = '0 0 0 3 1 2 3 4 5 6 7 8 1 4 2 4 3 5 5 0 5 5 2 0 2 2 3 0 3 3 4 5 6 1 3 7 4 0 5 2'

let treat = input.split(' '), index = 0, dir = [], res = 0;
for (let i = 0 ; i < 20; ++i) {
  let temp = [];
  temp.push(parseInt(treat[index]), parseInt(treat[index+1]));
  index += 2;
  dir.push(temp);
}

// console.log(dir);

for (let i = 0; i < num; ++i) {
  for (let j = i + 1; j < num; ++j) {
    for (let k = j + 1; k < num; ++k) {
      // if ((dir[i][0] === dir[j][0] && dir[i][0] === dir[k][0])
      // || (dir[i][1] === dir[j][1] && dir[i][1] === dir[k][1])) {
      //   continue;
      // }
      let square = [];
      square.push(Math.pow(dir[i][0] - dir[j][0], 2) + Math.pow(dir[i][1] - dir[j][1], 2));
      square.push(Math.pow(dir[i][0] - dir[k][0], 2) + Math.pow(dir[i][1] - dir[k][1], 2));
      square.push(Math.pow(dir[j][0] - dir[j][0], 2) + Math.pow(dir[j][1] - dir[k][1], 2));
      square.sort((a, b) => a-b);
      if (square[2] === square[0] + square[1]) ++res;
    }
  }
}

console.log(res);
