function treat (str) {
  let list = str.split('_');
  for (let i = 0; i < list.length; ++i) {
    let temp = item.split('');
    if (temp.length) temp[0].toUpperCase();
    item = temp.join('');
  }
  return list.join('');
}

let str = 'poco_engle_cat_tiger';
let res = treat(str);
console.log(res)
