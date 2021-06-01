'use strict';
let money = 1200;
let income = 500;
let addExpenses = 'Car, Phone, Credit, Utility';
let deposit = true;
let mission = 100000;
let period = 12;

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(addExpenses);


console.log('Длина строки addExpenses составляет ' + addExpenses.length + ' символов');
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей.');


// третий урок

money = +prompt('Ваш ежемесячный доход?');
console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let arrExpenses = addExpenses.toLowerCase().split(', ');
console.log(arrExpenses);

deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('1. Введите обязательную статью расходов?');
let amount1 = +prompt('1. Во сколько это обойдется?');
let expenses2 = prompt('2. Введите обязательную статью расходов?');
let amount2 = +prompt('2. Во сколько это обойдется?');


let getExpensesMonth = function() {
    return amount1 + amount2;
};
console.log('Сумма всех обязательныхплатежей ' + getExpensesMonth());

let getAccumulateMonth = function() {
    return money - amount1 - amount2;
};
console.log('Месячный бюджет составляет ' + getAccumulateMonth());

let accumulatedMonth = getAccumulateMonth();

let getTargetMonth = function() {
    return mission / accumulatedMonth;
};
console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяцев(-а)');

let budgetDay = function() {
    return accumulatedMonth / 30;
};
console.log('Дневной бюджет ', Math.floor(budgetDay()));

let getStatusIncome = function() {
    if (budgetDay() > 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay() >= 600) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay() > 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
};
console.log(getStatusIncome());
