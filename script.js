'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money,
    start = function() {
        do{
            money = prompt('Ваш ежемесячный доход?');
        }
        while (!isNumber(money));
    };
    start();
let appData = {
    income: {}, // доп доходы
    addIncome: [], // перечисление доп доходов
    expenses: {}, // доп расходы
    addExpenses: [], // возможные доп расходы
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы через запятую', "Машина, бензин");
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            for (let i = 0; i < 2; i++) {
                let cost = 0;
                let expenses1 = prompt('Введите обязательную статью расходов?', "Машина");
                do {
                    cost = +prompt('Во сколько это обойдется?');
                } while (!isNumber(cost));
                appData.expenses[expenses1] = cost; 
            }  
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
        for (let key in appData.expenses){
            appData.expensesMonth +=appData.expenses[key];
        }
        return appData.expensesMonth;
     },
    getBudget: function() {
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        let targetDay = Math.ceil(appData.mission / appData.budgetMonth);
        if(targetDay < 0) {
            return ('Ваша цель не будет дотигнута');
        } else {
            return ('Цель будет достигнута за ' + Number(targetDay) + ' месяцев(-а)');
        }    
    },
    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log(appData);
console.log('Период равен ' + appData.period + ' месяцев');
console.log('Цель заработать ' + appData.mission + ' рублей.');
console.log('Сумма всех обязательных платежей ' + appData.expensesMonth);
console.log('Месячный бюджет составляет ' + appData.budgetMonth);
console.log('Дневной бюджет ', Math.floor(appData.budgetDay));
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

let output = function() {
    for(let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key + ' - ' +
        appData[key]);
    }
};
output();

