function resultCalculate(str) {
  str = str.slice(1, str.length-1);
  console.log(str);
}



let test1 = '(* (- (* (+ 2 3) 5) 9 1) 2)'
let test2 = '(+ (* (- 300 (- 90 12 3) 1 2 3) 12 2) 1)'
let test3 = '(- 890 18 23 (* 1 2 3 (+ 1288 32)))'

console.log(resultCalculate(test1));
