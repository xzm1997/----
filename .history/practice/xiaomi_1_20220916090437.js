const myFlat = function(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  arr.forEach(item => {
    res = res.concat(myFlat(item));
  })
  return arr;
}

let arr = [1,[2,[3,[4]],[5]]];
console.log(myFlat(arr));
