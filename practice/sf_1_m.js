let num = read_line();

const findFive = function(num) {
  let count = 0;
  for (let i = 0; i < num.length; ++i) {
    if (num[i] === '5') ++count;
  }
  return count;
}

if (parseInt(num) < 55555) {
  console.log('55555');
} else if (parseInt(num) >= 55555 && parseInt(num) < 505555){
  console.log('505555');
} else {
  let count = findFive(num);
  if (count > 5) {
    let output = parseInt(num)+1;
    console.log(output);
  }
}
