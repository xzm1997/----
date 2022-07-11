let arrRandom = function(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let index = Math.floor(Math.random()*arr.length);
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
}

let arr = [1,2,3,4,5,6,7,8,9];
