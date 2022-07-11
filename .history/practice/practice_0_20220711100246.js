const myFlat = function(arr, depth) {
  if (!Array.isArray(arr) || !depth) {
    return arr;
  }
  return arr.reduce(function(prev, cur) {
    if (Array.isArray(cur)) {
      return prev.push(myFlat(cur, depth-1));
    } else {
      return prev.concat(cur);
    }
  }, [])
}


let arr = [1,2,[3,4,[5],[6,7,8,[9]],[10]],[11,12,13,[14]]];
console.log(myFlat(arr, 1));
console.log(myFlat(arr, 2));
console.log(myFlat(arr, 3));
