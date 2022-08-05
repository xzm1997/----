Promise.allSettled = function(promises) {
  return new Promise(function(resolve) {
      const results = []
      promises.forEach((s, index) => {
          results[index] = {
              status:'fulfilled',
              value: s
          }
      })
      resolve(results)
  })
}
