function solveProblem(arr) {
  let res = [];
  for (let country of arr) {
    let keys = Object.keys(country);
    let countryName = country['country'];
    keys.forEach((key) => {
      if (key !== 'country') {
        let item = {country: countryName};
        item.
        res.push(item);
      }
    })
  }
  return res;
}



const data = [
  { country: 'China', gold: 11, silver: 5, bronze: 8 },
  { country: 'Japan', gold: 11, silver: 4, bronze: 5 },
  { country: 'USA', gold: 10, silver: 11, bronze: 9 },
];

let res = solveProblem(data);
console.log(res);
