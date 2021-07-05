'use strict';

let money,
    isNumber,       
    appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {}, // доп доходы
    addIncome: [], // перечисление доп доходов
    expenses: {}, // доп расходы
    addExpenses: [], // возможные доп расходы
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0, 
    mission: 50000,
    period: 3,   
    expensesMonth: 0,
    asking: function() {
        let cashIncome = 0,
            itemIncome;
        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            } while (isNumber(itemIncome));
            
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            } while (!isNumber(cashIncome));            
            appData.income[itemIncome] = cashIncome;
        }
        let addExpenses;
        do {
            addExpenses = prompt('Перечислите возможные расходы через запятую', "машина, бензин");
            } while (isNumber(addExpenses));
            addExpenses = addExpenses.replace(/( |^)[а-яёa-z]/g, 
                function(x){ 
                    return x.toUpperCase();
                }
            );
            appData.addExpenses = addExpenses.split(', ');
            console.log(addExpenses);
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            for (let i = 0; i < 2; i++) {
                let cost = 0,
                    expenses1;
                do {
                    expenses1 = prompt('Введите обязательную статью расходов?', "Машина");
                } while (isNumber(expenses1));
                do {
                    cost = +prompt('Во сколько это обойдется?');
                } while (!isNumber(cost));
                appData.expenses[expenses1] = cost; 
            }  
    },
    getExpensesMonth: function() {
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
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
    },
    getInfoDeposit: function() {
        if(appData.deposit) {
            do { 
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            } while (!isNumber(appData.percentDeposit));
            do{
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while (!isNumber(appData.moneyDeposit));
           
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
};

isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let start = function() {
        do{
            money = prompt('Ваш ежемесячный доход?',10000);
        }
        while (!isNumber(money));
    };
start();
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();

console.log(appData);
console.log('Период равен ' + appData.period + ' месяцев');
console.log('Цель заработать ' + appData.mission + ' рублей.');
console.log('Сумма всех обязательных платежей ' + appData.expensesMonth);
console.log('Месячный бюджет составляет ' + appData.budgetMonth);
console.log('Дневной бюджет ', Math.floor(appData.budgetDay));
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
