'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 500,
    addExpenses = 'машина, квартика, коммуналка',
    deposit = true,
    mission = 100000,
    period = 12;

let start = function() {
    do{
        money = prompt('Ваш ежемесячный доход?');
    }
    while (!isNumber(money));
};
start();

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(addExpenses);

// console.log('Длина строки addExpenses составляет ' + addExpenses.length + ' символов');
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей.');

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Машина, бензин");
let arrExpenses = addExpenses.toLowerCase().split(', ');
console.log(arrExpenses);

deposit = confirm('Есть ли у вас депозит в банке?');

let expenses = [];
let getExpensesMonth = function() {
    let sum = 0;
    let sum1 = 0;
        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов?', "Машина");
            do{
                sum1 = prompt('Во сколько это обойдется?');
            }
            while (!isNumber(sum1));
            sum += Number(sum1);
        }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Сумма всех обязательных платежей ' + expensesAmount);

let getAccumulateMonth = function() {
    return money - expensesAmount;
};
console.log('Месячный бюджет составляет ' + getAccumulateMonth());


let accumulatedMonth = getAccumulateMonth();

let getTargetMonth = function() {
    return mission / accumulatedMonth;     
};

let getStatusTarget = function(){
    if(getTargetMonth() < 0) {
        return ('Ваша цель не будет дотигнута');
    } else {
        return ('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяцев(-а)');
    }
};
console.log(getStatusTarget());


let budgetDay = function() {
    return accumulatedMonth / 30;
};
console.log('Дневной бюджет ', Math.floor(budgetDay()));

let getStatusIncome = function() {
    if (budgetDay() >= 1200) {
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

