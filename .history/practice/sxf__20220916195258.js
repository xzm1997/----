function formatTime(timestamp, format) {
  let date = new Date(timestamp);
  let res = format;
  res = res.replace(/yyyy/g, date.getFullYear());
  res = res.replace(/MM/g, formatNum(date.getMonth() + 1));
  res = res.replace(/dd/g, formatNum(date.getDate()));
  res = res.replace(/HH/g, formatNum(date.getHours()));
  res = res.replace(/mm/g, formatNum(date.getMinutes()));
  res = res.replace(/ss/g, formatNum(date.getSeconds()));
  return res;
}

function formatNum (input) {
  let str = input.toString();
  if (str.length === 1) {
    return '0' + str;
  } else {
    return str;
  }
}

// console.log(formatTime(1660653659557,'yyyy年MM月MM月dd日-HH:mm:ss'))
let str = ''
let line = str.split(' ')
let timestrap = line.shift(), format = line.join(' ')
