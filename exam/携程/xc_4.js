const read_line = require('readline-sync');

let num = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))

let eachRes = [], sortArr = [];
for (let i = 0; i < num-1; ++i) {
  eachRes[i] = Math.abs(arr[i+1] - arr[i]);
  sortArr[i] = Math.abs(arr[i+1] - arr[i]);
}

sortArr.sort((a,b) => b-a);


if (num === 2) {
  console.log(Math.abs(arr[1] - arr[0]));
} else {
  let maxIndex = eachRes.indexOf(eachRes[0]);
  if (maxIndex === 0 || maxIndex === eachRes.length-1) {
    console.log(sortArr[1]);
  } else {
    let modifiedNumFront = Math.ceil((eachRes[maxIndex - 1] + sortArr[0])/2);
    let modifiedNumBack = Math.ceil((eachRes[maxIndex + 1] + sortArr[0])/2);
    console.log(modifiedNumFront, modifiedNumBack, sortArr[1])
    console.log(Math.min(modifiedNumFront, modifiedNumBack, sortArr[1]))
  }
}
