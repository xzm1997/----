let numStu = 4, numChange = 3;
let numSweet = [2,3,5,4];

for (let i = 0; i < numChange; ++i) {
  let numOutput = [];
  for (let j = 0; j < numSweet.length; ++j) {
    let sweetOutput = Math.floor(numSweet[j]/2);
    numSweet[i] -= sweetOutput*2;
    numOutput.push(sweetOutput);
  }
  console.log(numOutput)
  for (let k = 0; k < numSweet.length; ++k) {
    numSweet[k] += numOutput[(k === 0 ? numStu-1 : k-1)];
    numSweet[k] += numOutput[(k === numStu-1 ? 0 : k-1)];
  }
}

console.log(numSweet);
