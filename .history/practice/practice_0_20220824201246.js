function myFlat(arr, num) {
  if (!Array.isArray(arr)) return arr;
  let res = [];
  arr.forEach(item => {
    res = res.concat(myFlat(item, num-1));
  })
  return res;
}

let arr = [1,4,[1,6,3,[5,3]],3,1,4,[5,6,[9]]];
let res = myFlat(arr, 2);
console.log(res);
