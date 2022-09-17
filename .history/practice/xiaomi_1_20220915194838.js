function pull(array, ...values) {
  let res = [];
  array.forEach(function(item) {
    if (values.indexOf(item) === -1) {
      res.push(item)
    }
  })
  array = []
  console.log(array)
}

let array = ['a', 'b', 0, 'a', 'b', 'c', true]
pull(array, 'a', 0)

console.log(array)
