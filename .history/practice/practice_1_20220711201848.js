const step = function() {
  let status = 0;
  return function() {
    console.log(status);
    status = status ? 0 : 1;
  }
}
