const read_line = require('readline-sync');
let num = read_line.question("");

const findFive = function(num) {
  let count = 0;
  for (let i = 0; i < num.length; ++i) {
    if (num[i] === '5') ++count;
  }
  return count;
}

let count  = findFive(num);
num = num.split('').map(item => parseInt(item));

if (count > 5) {
  let output = parseInt(num.join(''))+1;
  console.log(output);
} else {
  if (num[num.length-1] < 5) {
    for (let i = num.length-1; i >= 0; ++i) {
      if (num[i] !== 5) {
        num[i] = 5;
        ++count;
      }
      if (count === 5) {
        break;
      }
    }
    while (count < 5) {
      num.unshift(5);
    }
    console.log(num.join(''));
  } else {
    if (count === 4 && num[num.length-2] < 5) {
      num[num.length-2] = 5;
      num[num.length-1] = 0;
      console.log(num.join(''))
    } else {
      
    }
  }
}
