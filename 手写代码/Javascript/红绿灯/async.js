let stepAsync = (color, time) => new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log(color)
    resolve();
  }, time)
})

const runAsync = async () => {
  stepAsync('red', 1000)
  await stepAsync('yellow', 2000)
  await stepAsync('green', 3000)
  await runAsync()
}

runAsync();
