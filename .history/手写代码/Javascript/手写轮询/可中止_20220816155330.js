function myInterval(callback, interval = 2000) {
  let timerId
  const loop = async () => {
    callback()
    return (timer = setTimeout(loop, interval))
  }
  return {
    start: () => {
      loop()
    },
    stop: () => {
      console.log('停止执行')
      clearTimeout(timerId)
    }
  }
}
