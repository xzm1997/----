const myFlat = function(arr, depth) {
  while (!depth) {
    return arr;
  }
  let res = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res.push(...item);
    } else {
      res.push(item);
    }
  })
  return myFlat(arr, depth-1);
}


let arr = [1,2,[3,4,[5],[6,7,8,[9]],[10]],[11,12,13,[14]]];
console.log(myFlat(arr, 2));
