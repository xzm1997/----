const step = function() {
  let status = 0;
  return function() {
    setTimeout(() => {
      status = status ? 0 : 1;
      step()();
    }, 1000)
  }
}

step()();
