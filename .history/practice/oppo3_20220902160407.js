function humpTo(s) {
  if (/^[A-Z]/.test(s)) return s;
  if (/[A-Z]/.test(s)) {
    if (/[A-Z]{2,}/.test(s)) {
      let str = /[A-Z]{2,}/.exec(s)[0];
      str = '_' + str.slice(0, str.length-1) + str +str[str.length-1];
      s = s.replace(/[A-Z]{2,}/g, str).toLowerCase();
    }
    s = s.replace(/[A-Z]{1}/g, '_$&').toLowerCase();
    s = s.replace(/_/g, "_");
  }
}
