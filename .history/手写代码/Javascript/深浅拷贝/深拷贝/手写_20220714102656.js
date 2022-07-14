function deepCopy(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }
  let copyObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      copyObj[key] = deepCopy(obj[key])
    } else {
      copyObj[key] = obj[key];
    }
  }
  return copyObj;
}

const obj = {
  name: 'achang',
  age: 25,
  skills: {
    js: '深拷贝'
  }
}

const obj4 = deepCopy(obj)
obj4.skills.js = '修改深拷贝'
console.log('obj4 -->', obj4)
console.log('obj4 -->', obj)
