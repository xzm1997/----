const step = function() {
  let status = 0;
  return function() {
    setTimeout(() => {
      status = status ? 0 : 1;
      console.log(status);
      step()();
    }, 1000)
  }
}

step()();
