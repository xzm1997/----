function humpTo(s) {
  if (/^[A-Z]/.test(s)) return s;
  if (/[A-Z]/.test(s)) {
    let str = /[A-Z]{2,}/.exec(s)[0]
  }
}
