let num = 20
let input = '0 0 0 3 1 2 3 4 5 6 7 8 1 4 2 4 3 5 5 0 5 5 2 0 2 2 3 0 3 3 4 5 6 1 3 7 4 0 5 2'

let treat = input.split(' '), index = 0, dir = [];
for (let i = 0 ; i < 20; ++i) {
  let temp = [];
  temp.push(treat[i], treat[i+1]);
  i += 2;
}

console.log(dir);
