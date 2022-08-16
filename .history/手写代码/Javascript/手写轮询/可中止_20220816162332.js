// 可以自动停止的定时器
function myInterval(callbackList, interval = 2000) {
  let timer
  let isStop = false
  const add = function(method) {
    callbackList.push(method);
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
    callbackList.forEach(function (callback) {
      callback();
    })
    if (isStop) return
    return (timer = setTimeout(loop, interval))
  }
  return {
    add,
    start,
    stop
  }
}
