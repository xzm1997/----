const myFlat = function(arr, depth) {
  while (!depth) {
    return arr;
  }
  arr.forEach((item, index) => {
    
  })
  return myFlat(arr, depth-1);
}


let arr = [1,2,[3,4,[5],[6,7,8,[9]],[10]],[11,12,13,[14]]];
console.log(myFlat(arr, 2));
