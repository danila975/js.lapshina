const { readFile } = require('fs');

console.log('START')
readFile('2.txt', 'utf-8', (e, y) => { readFile('1.txt', 'utf-8', (e, x) => console.log(x)); console.log(y);});
console.log('NEXT');