// [1,[2,[3,[4,5]]],6] -> [1,2,3,4,5,6]  

function myFlat(arr) {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i])) {
      res = res.concat(myFlat(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res;
}

let arr = [1,[2,[3,[4,5]]],6]
console.log(myFlat(arr))
