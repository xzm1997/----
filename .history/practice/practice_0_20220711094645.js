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
  myFlat(arr, depth-1);
}
