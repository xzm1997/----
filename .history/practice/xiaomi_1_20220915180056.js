// [1,[2,[3,[4,5]]],6] -> [1,2,3,4,5,6]  

function myFlat1(arr) {
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

function myFlat2 (arr) {
  return arr.flat(Infinity)
}

function myFlat3(arr) {
  let res = arr.toString().split(',').map(item => parseInt(item));
  return res;
}

function myFlat4(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr;
}

function myFlat5(arr) {
  if (!Array.isArray(arr)) return arr;
  let res = [];
  arr.forEach(item => {
    res.concat(myFlat5(item));
  })
  return arr;
}

let arr = [1,[2,[3,[4,5]]],6]
console.log(myFlat5(arr))
