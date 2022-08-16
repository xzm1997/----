// 可以自动停止的定时器
function myInterval(callback, interval = 2000) {
  let timer
  let isStop = false
  const add = function() {
    
  }
  const stop = () => {
    console.log('停止')
    isStop = true
    clearTimeout(timer)
  }
  const start = () => {
    isStop = false
    loop()
  }
  const loop = async () => {
    callback()
    if (isStop) return
    return (timer = setTimeout(loop, interval))
  }
  return {
    add,
    start,
    stop
  }
}
