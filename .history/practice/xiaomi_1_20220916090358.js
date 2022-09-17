const myFlat = function(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  let res = []
  arr.forEach(item => {
    res.concat(myFlat(item));
  })
  return res;
}

let array = [1,[2,[3,[4]],[5]]];
console.log(myFlat(array));
