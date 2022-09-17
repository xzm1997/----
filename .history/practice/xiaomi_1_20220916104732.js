function add(a, b) {
  if (b === 0) return 0;
  return a + add(a, b-1)
}

console.log(add(121212121, 1312121212))
