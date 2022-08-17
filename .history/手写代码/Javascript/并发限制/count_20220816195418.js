const asyncLimit = function(url, limit) {
  const step = function () {
    if (url.length) {
      const p = request(url.shift()).then(function() {
        resList.push(p);
        step();
      })
    } 
  }

  let resList = [];
  for (let i = 0; i < limit; ++i) {
    step();
  }
  return Promise.all(resList)
}
