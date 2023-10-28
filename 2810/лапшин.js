import { readFile } from 'node:fs/promises';

const file = await readFile('package.json', 'utf-8', (e, x) => console.log(e ? e : x));

console.log(file);