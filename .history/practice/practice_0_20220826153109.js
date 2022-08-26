function solveProblem(num1, num2) {
  num1 = num1.slice(0, num1.length-num2.length);
  let res = [];
  while (num1.length && num2.length) {
    if (num1[0] < num2[0]) {
      res.push(num1.shift());
    } else {
      res.push(num2.shift());
    }
  }
  if (num1.length) {
    res = res.concat(num1);
  }
  if (num2.length) {
    res = res.concat(num2);
  }
  return res;
}


let num1 = [1,2,3,0,0,0], num2 = [2,5,6];
solveProblem(num1, num2);

