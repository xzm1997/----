function pull(array, ...values) {
  for (let i = arr.length-1; i >= 0; --i) {
    if (values.indexOf(arr[i]) === -1) {
      values.splice(i, 1);
    }
  }
  console.log(array)
}

let array = ['a', 'b', 0, 'a', 'b', 'c', true]
pull(array, 'a', 0)

console.log(array)
