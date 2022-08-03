const promise = Promise.resolve().then(() => {
  return promise;
})

console.log(promise);
