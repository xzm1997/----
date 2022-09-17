function pull(array, ...values) {
  let res = [];
  array.forEach(function(item, index) {
    if (values.indexOf(item) === -1) {
      array.splice(index, 1)
    }
  })
  console.log(array)
}

let array = ['a', 'b', 0, 'a', 'b', 'c', true]
pull(array, 'a', 0)

console.log(array)
