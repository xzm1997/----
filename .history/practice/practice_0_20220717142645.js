let input = 'A man, a plan, a canal: Panama'

input = input.replace(/\s*/g, '').toLowerCase();
input = input.replace(/[^a-z0-9]/g, '');
let dir = input.split('');
let i = 0, j = dir.length-1;
while (i <= j) {
  if (dir[i] !== dir[j]) {
    console.log(false);
    break;
  } else {
    ++i;
    --j;
  }
}
console.log(true);
