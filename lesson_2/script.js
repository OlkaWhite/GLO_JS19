let money = 1200;
let income = 500;
let addExpenses = 'Car, Phone, Credit, Utility';
let deposit = true;
let mission = 100000;
let period = 12;


console.log(typeof money);
console.log(typeof income);
console.log(typeof addExpenses);
console.log('Длина строки addExpenses составляет ' + addExpenses.length + ' символов');
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' бел рублей.');

let budgetDay = money / 30;
// console.log('Дневной бюджет составляет ' + budgetDay + ' рублей');

// третий урок

money = +prompt('Ваш ежемесячный доход?');
console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let arrExpenses = addExpenses.toLowerCase().split(', ');
console.log(arrExpenses);

deposit = confirm('Есть ли у вас депозит в банке?');
// console.log(deposit);

let expenses1 = prompt('1. Введите обязательную статью расходов?');
// console.log(expenses1);

let amount1 = +prompt('1. Во сколько это обойдется?');
// console.log(amount1);

let expenses2 = prompt('2. Введите обязательную статью расходов?');
// console.log(expenses2);

let amount2 = +prompt('2. Во сколько это обойдется?');
// console.log(amount2);

let budgetMonth = money - amount1 - amount2;
console.log('Месячный бюджет составляет ', budgetMonth);

let targetMission = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за ' + targetMission + ' месяцев(-а)');

budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на месяц ', budgetDay);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay <= 1200 ) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay > 0 && budgetDay < 600 ) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}