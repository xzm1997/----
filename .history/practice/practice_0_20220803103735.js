const promise = Promise.resolve().then(() => {
  return promise;
}).catch(console.err)
