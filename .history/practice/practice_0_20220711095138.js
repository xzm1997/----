const myFlat = function(arr, depth) {
  while (!depth) {
    return arr;
  }
  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i])) {
      let front = arr.slice(0, i);
      let back = arr.slice(i+1);
      arr = front.concat(arr[i]).concat(back);
    }
  }
  return myFlat(arr, depth-1);
}


let arr = [1,2,[3,4,[5],[6,7,8,[9]],[10]],[11,12,13,[14]]];
console.log(myFlat(arr, 2));
