function deepClone (obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    let res = [];
    for (let item of obj) {
      res.push(deepClone(item));
    }
  } else {
    
  }
}
