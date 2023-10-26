import { task } from './4.mjs'; // подключаю функцию из файла с promise
const x = { name: Promise.resolve('yes')}; // задаю объект со свойством name и промисом в нём.
console.log(await task(x));       // вызывается функция task с объектом x
