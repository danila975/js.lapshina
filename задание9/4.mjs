import moment from 'moment';
let b = Number(0);
function task(x) {
    if (x !== null) {
        if (Object.getPrototypeOf(x) == null) {
            return b;
        }
        else {
            b = b + 1;
            return task(Object.getPrototypeOf(x));
        }
    }
    else {
        return moment().format('DD.MM.YYYY');
    }
    }
const a = {'1': 'a', '2': 'b'}; // проверочный объект
console.log(task(a));