function resultCalculate(str) {
  str = str.slice(1, str.length-1);
  if (str.indexOf('(')) {
    let reg = new RegExp('/\(.*\)/', 'g');
    let subStr = str.match(reg);
    console.log(subStr);
  } else {

  }
}



let test1 = '(* (- (* (+ 2 3) 5) 9 1) 2)'
let test2 = '(+ (* (- 300 (- 90 12 3) 1 2 3) 12 2) 1)'
let test3 = '(- 890 18 23 (* 1 2 3 (+ 1288 32)))'

console.log(resultCalculate(test1));
