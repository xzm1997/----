asyncLoop = function(callback, interval = 2000) {
  let timer
  let isStop = false

  const add = function (method) {
    
  }

  const stop = function () {
    isStop = true
    clearTimeout(timer)
  }

  const start = async function () {
    isStop = false
    await loop()
  }

  const loop = async function() {
    try {
      await callback();
    } catch(e) {
      throw e;
    }
    if (isStop) return
    return (timer = setTimeout(loop, interval))
  }

  return {
    add,
    start,
    stop
  }
}
