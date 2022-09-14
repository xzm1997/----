const read_line = require('readline-sync');

let num = parseInt(readline());

for (let i = 0; i < num; ++i) {
    let set = new Set(readline().split(''));
    if (set.size === 1) console.log('Yes')
    else console.log('No')
}
