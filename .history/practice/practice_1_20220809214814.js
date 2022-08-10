let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve(2);
  }, 3000);
})

p1.then((value) => {
  console.log(value);
})
