function add(a, b) {
  if (b === 0) return 0;
  return a + add(a, b-1n)
}

add(12n, 13n)
