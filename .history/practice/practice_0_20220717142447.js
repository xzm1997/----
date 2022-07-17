let input = 'A man, a plan, a canal: Panama'

input = input.replace(/\s*/g, '').toLowerCase();
input = input.replace(/[^a-z0-9]/g, '');
let dir = input.split('')
