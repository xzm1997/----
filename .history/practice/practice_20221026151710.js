function solveProblem2(students_data) {
  let dir = students_data.split(' ');
  let reg = new RegExp('[0-9]+', 'g');
  let res = [];
  dir.forEach(item => {
    let target = item.match(reg);
    res.push(target[0])
  })
  return res.join(' ');
}


// console.log(solveProblem2('20200001张三 20200002李四 20200003王麻子'))


function findAllArray(rank) {
  
}

function testArray(item) {
  let len = item.length;
  
}
