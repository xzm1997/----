const read_line = require('readline-sync')
let gameNum = read_line.question("")

for (let i = 0; i < gameNum; ++i) {
  let aliceInput = read_line.question("").split(' ').map(item => parseInt(item));
  let BobInput = aliceInput.splice(3,3);
  
  let aliceElement = [], BobElement = [];
  let aliceCount = [], BobCount = [];

  for (let i = 0; i < 3; ++i) {
    aliceIndex = aliceElement.indexOf(aliceInput[i]);
    if (aliceIndex === -1) {
      aliceElement.push(aliceInput[i]);
      aliceCount.push(1);
    } else {
      
    }
  }
}
