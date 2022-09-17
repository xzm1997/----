// [1,[2,[3,[4,5]]],6] -> [1,2,3,4,5,6]  

function myFlat(arr) {
  if (!Array.isArray(arr)) return arr;
  let res = [];
  arr.forEach(item => {
    res = res.concat(myFlat(arr));
  })
  return res;
}

let arr = [1,[2,[3,[4,5]]],6]
console.log(myFlat(arr))
