export function task(x) { // задаём функцию. слово export означает, что эту функцию можно использовать в другом файле
    return Promise.resolve(x.name)
}
