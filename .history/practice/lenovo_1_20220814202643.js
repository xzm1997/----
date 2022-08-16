let numStu = 4, numChange = 3;
let numSweet = [2,3,5,4];

for (let i = 0; i < 3; ++i) {
  let numOutput = [];
  for (let j = 0; j < numSweet.length; ++j) {
    let sweetOutput = Math.floor(numSweet[j]);
    numSweet[i] -= sweetOutput*2;

  }
}
