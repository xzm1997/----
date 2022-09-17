function deepClone (obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    let res = [];
    for (let item of obj) {
      res.push(deepClone(item));
    }
    return res;
  } else {
    let res = {};
    for (let key in obj) {
      res[key] = deepClone(obj[key]);
    }
  }
}
