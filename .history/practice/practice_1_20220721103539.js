function treat (str) {
  let list = str.split('_');
  for (let i = 0; i < list.length; ++i) {
    let temp = list[i].split('');
    temp[0].toUpperCase();
    console.log(temp[0]);
    list[i] = temp.join('');
  }
  return list.join('');
}

let str = 'poco_engle_cat_tiger';
let res = treat(str);
console.log(res)
