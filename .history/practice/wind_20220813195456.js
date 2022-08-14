function resultCalculate(str) {
  str = str.slice(1, str.length-1);
  if (str.indexOf('(') !== -1) {
    let start = str.indexOf('(');
    let end = str.indexOf(')');
    let res = resultCalculate(str.slice(start, end+1)).toString();
    let list = str.split('');
    list.splice(start, end-start+1, res);
    let newStr = '(' + list.join('') + ')';
    return resultCalculate(newStr);
  } else {
    let list = str.split(' ');
    let symbol = list.shift();
    let calculate = list.join(symbol);
    return eval(calculate);
  }
}



let test1 = '(* (- (* (+ 2 3) 5) 9 1) 2)'
let test2 = '(+ (* (- 300 (- 90 12 3) 1 2 3) 12 2) 1)'
let test3 = '(- 890 18 23 (* 1 2 3 (+ 1288 32)))'


console.log(resultCalculate(test1));
