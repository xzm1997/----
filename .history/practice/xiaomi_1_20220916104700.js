function add(a, b) {
  if (b === 0) return 0;
  return a + add(a, b-1)
}

add(12, 13)
