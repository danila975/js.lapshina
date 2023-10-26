import { task } from './4.mjs'; // подключаю функцию из файла с promise
console.log(await task(1));       // вызывается 'yes'
console.log(await task(0));       // вызывается дата
console.log(await task(17));      // 'yes'


try {
 console.log(await task(18));      // ERROR 'no'
} catch (e) {
 console.log(e);
} // обработка ошибки и вывод того, что её вызвало.