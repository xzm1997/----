const asyncLimit = function(url, limit) {
  const step = function () {
    if (url.length) {
      const p = request(url.shift()).then(function() {
        step();
      })
    }
  }

  let resList = [];
  for (let i = 0; i < limit; ++i) {
    
  }
}
