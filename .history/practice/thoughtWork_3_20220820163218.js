function RemoveLetters(s, letters) {
  let dic = s.split(''), res = [];
  letters.map(item => item.toLowerCase());
  for (let i = 0; i < dic.length; ++i) {
      if (letters.indexOf(dic[i].toLowerCase()) === -1) {
          res.push(dic[i]);
      }
  }
  return res.join('');
}

console.log(RemoveLetters('ABCDEFG', ['A', 'E']));
