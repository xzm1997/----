function pull(array, ...values) {
  let res = [];
  array.forEach(function(item) {
    if (values.indexOf(item) === -1) {
      res.push(item)
    }
  })
  return res;
}

console.log(pull(['a', 'b', 0, 'a', 'b', 'c', true], 'a', 0))
