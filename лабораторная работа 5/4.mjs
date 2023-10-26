import moment from 'moment'; // подключаем библиотеку для вывода даты.
export function task(x) { // задаём функцию. слово export означает, что эту функцию можно использовать в другом файле
    return (x > 18) ? Promise.reject('no') : (x !== 0) ? Promise.resolve('yes') : Promise.resolve(moment().format('DD.MM.YYYY')); // затаём promise
}
