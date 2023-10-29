function task(nam, fam, login = 'mylogin') { this.name = nam; this.familyname = fam; this.login = login; } // функция конструктор с login, по умолчанию равным 'mylogin'
const a = new task('данила', 'лапшин',) // создаю объект для проверки
task.prototype // создаю объект прототип для task в котором будет свойство getFullName
task.prototype.getFullName = a.name + a.familyname + '!'; // создаю свойство getFullName и применяю его к созданному проверочному объекту a
console.log(a.getFullName); // вызываю это свойство как свойство проверочного объекта