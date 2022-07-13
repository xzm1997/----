function solveProblem(arr) {
  let res = [];
  for (let country of arr) {
    let item = Object.entries(country);
    for (let i = 1; i < item.length; ++i) {
      
    }
  }
}

const data = [
  { country: 'China', gold: 11, silver: 5, bronze: 8 },
  { country: 'Japan', gold: 11, silver: 4, bronze: 5 },
  { country: 'USA', gold: 10, silver: 11, bronze: 9 },
];

let res = solveProblem(data);
console.log(res);
