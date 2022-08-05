Promise.allSettled = function(promises) {
  return new Promise(function(resolve) {
    const results = []
    const count = 0
    promises.forEach((s, index) => {
      Promise.resolve(s).then(res => {
        results[index] = {
          status:'fulfilled',
          value: s
        }
        count++
        if(count === promises.length) {
          resolve(results)
        }
      }).catch(val=>{
        results[index] = {
          status:'reject',
          value: s
        }
        count++
        if(count === promises.length) {
          resolve(results)
        }
      })
    })
    resolve(results)
  })
}
