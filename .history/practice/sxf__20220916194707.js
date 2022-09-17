function formatTime(timestamp, format) {
  let date = new Date(timestamp);
  let res = format;
  res = res.replace('yyyy', date.getFullYear());
  res = res.replace('mm', formatNum(date.getMonth() + 1));
  res = res.replace('dd', formatNum(date.getDate()));
  res = res.replace('hh', formatNum(date.getHours()));
  res = res.replace('mi', formatNum(date.getMinutes()));
  res = res.replace('ss', formatNum(date.getSeconds()));
}

function formatNum (input) {
  let str = input.toString();
  if (str.length === 1) {
    return '0' + str;
  } else {
    return str;
  }
}

console.log(formatNum())
