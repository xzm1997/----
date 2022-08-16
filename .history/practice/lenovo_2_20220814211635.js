const read_line = require('readline-sync')
let gameNum = read_line.question("")

for (let i = 0; i < gameNum; ++i) {
  let aliceInput = read_line.question("").split(' ').map(item => {
    let temp = parseInt(item);
    if (Number.isNaN(temp)) {
      return 1;
    } else {
      return temp;
    }
  });
  let bobInput = aliceInput.splice(3,3);

  aliceInput.sort((a, b) => b-a);
  bobInput.sort((a, b) => b-a);
  
  let aliceElement = [], bobElement = [];
  let aliceCount = [], bobCount = [];

  for (let i = 0; i < 3; ++i) {
    let aliceIndex = aliceElement.indexOf(aliceInput[i]);
    let bobIndex = bobElement.indexOf(bobInput[i]);
    if (aliceIndex === -1) {
      aliceElement.push(aliceInput[i]);
      aliceCount.push(1);
    } else {
      aliceCount[aliceIndex] += 1;
    }

    if (bobIndex === -1) {
      bobElement.push(bobInput[i]);
      bobCount.push(1);
    } else {
      bobCount[bobIndex] += 1;
    }
  }
  let res;
  // console.log(aliceElement, bobElement);
  if (aliceElement.length > bobElement.length) {
    res = 'Alice'
  } else if (aliceElement.length < bobElement.length) {
    res = 'Bob'
  } else {
    for (let j = 0; j < aliceElement.length; ++j) {
      console.log(aliceElement[j], bobElement[j])
      if (aliceElement[j] > bobElement[j]) {
        res = 'Alice'
        break;
      } else if (aliceElement[j] < bobElement[j]) {
        res = 'Bob'
        break;
      }
    }
  }
  if (res) {
    console.log(res);
  } else {
    console.log('Tie')
  }
}
