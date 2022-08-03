const promise = Promise.resolve().then(() => {
  return promise;
}).then(() => {
  console.log(1);
})

console.log(promise);
