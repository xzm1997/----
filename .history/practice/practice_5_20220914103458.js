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
    return res;
  }
}

const data = [
  { country: 'China', gold: 11, silver: 5, bronze: 8 },
  { country: 'Japan', gold: 11, silver: 4, bronze: 5 },
  { country: 'USA', gold: 10, silver: 11, bronze: 9 },
];

let res = deepClone(data);
console.log(res);
