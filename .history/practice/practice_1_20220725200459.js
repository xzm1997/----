let input = "2018-10-01"

let year, mon, day, num = 0;
[year, mon, day] = input.split('-');
year = parseInt(year);
mon = parseInt(mon);
day = parseInt(day);

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

num += day;

let weekDayNum = num % 7, weekDay;
let dt = new Date(year, mon, day);
let dir = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
weekDay = dir[dt.getDay()]
// switch (weekDayNum) {
//   case 0 : {
//     weekDay = 'Sunday';
//     break;
//   }
//   case 1 : {
//     weekDay = 'Monday';
//     break;
//   }
//   case 2 : {
//     weekDay = 'Tuesday';
//     break;
//   }
//   case 3 : {
//     weekDay = 'Wednesday';
//     break;
//   }
//   case 4 : {
//     weekDay = 'Thursday';
//     break;
//   }
//   case 5 : {
//     weekDay = 'Friday';
//     break;
//   }
//   case 6 : {
//     weekDay = 'Saturday';
//     break;
//   }
// }

let res = num + '(' + weekDay + ')';
console.log(res)
