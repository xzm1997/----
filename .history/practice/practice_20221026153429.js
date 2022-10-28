function solveProblem2(students_data) {
  let dir = students_data.split(' ');
  // let reg = new RegExp('[0-9]{8}', 'g');
  let reg = /[0-9]{8}/g
  let res = [];
  dir.forEach(item => {
    let target = item.match(reg);
    res.push(target[0])
  })
  return res.join(' ');
}


// console.log(solveProblem2('20200001张三 20200002李四 20200003王麻子'))


function findAllArray(rank) {
  let target = 1, res = 1;
  for (let i = rank-1; i > 0; --i) {
    target *= i;
  }
  for (let i = target-1; i > 0; --i) {
    res *= i;
  }
  return res;
}

console.log(findAllArray(2))
// function testArray(item) {
//   let len = item.length;
//   for (let i = 1; i < len; ++i) {
//     for (let j = 0; j < i; ++j) {
//       if (item[i][j] !== item[j][i]) return false;
//     }
//   }
//   return true
// }

// let testData = [[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]]
// console.log(testArray(testData))
