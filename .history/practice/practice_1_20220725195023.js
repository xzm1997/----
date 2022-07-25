let input = "2018-01-01"

let year, mon, day, num = 0;
[year, mon, day] = input.split('-');
console.log(year, mon, day)

switch (mon - 1) {
  case 11 : num += 30;
  case 10 : num += 31;
  case 9 : num += 30;
  case 8 : num += 31;
  case 7 : num += 31;
  case 6 : num += 30;
  case 5 : num += 31;
  case 4 : num += 30;
  case 3 : num += 31
  case 2 : {
    if (year % 4 == 0) num += 29;
    else num += 28;
  }
  case 1 : num += 31;
}

console.log(num);
