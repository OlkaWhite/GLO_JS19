'use strict';


let salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelectorAll('.income-title')[1],
    incomeAmount = document.querySelector('.income-amount'),
    btnPlusIncome = document.getElementsByTagName('button')[0],
    additionIncomItem1 = document.querySelectorAll('.additional_income-item')[0],
    additionIncomItem2 = document.querySelectorAll('.additional_income-item')[1],
    expensesTitle = document.querySelectorAll('.expenses-title')[1],
    expensesAmount = document.querySelector('.expenses-amount'),
    btnPlusExpenses = document.getElementsByTagName('button')[1],
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositCheck = document.querySelector('#deposit-check'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    resultBudgetMonth = document.querySelectorAll('.result-total')[0],
    resultBudgetDay = document.querySelectorAll('.result-total')[1],
    resultExpensesMonth = document.querySelectorAll('.result-total')[2],
    resultAdditionalIncome = document.querySelectorAll('.result-total')[3],
    resultAdditionalExpenses = document.querySelectorAll('.result-total')[4],
    resultIncomPeriod = document.querySelectorAll('.result-total')[5],
    resultTargetMonth = document.querySelectorAll('.result-total')[6],
    btnStart = document.getElementById('start'),
    btnCancel = document.getElementById('cancel');




console.log('мес доход - сумма: ', salaryAmount);
console.log('incomeTitle: ', incomeTitle); 
console.log('incomeAmount: ', incomeAmount);
console.log('btnPlusIncome: ', btnPlusIncome);
console.log('additionIncomItem1: ', additionIncomItem1);
console.log('additionIncomItem1: ', additionIncomItem2);
console.log('expensesTitle: ', expensesTitle);
console.log('expensesAmount: ', expensesAmount);
console.log('btnPlusExpenses: ', btnPlusExpenses);
console.log('additionalExpensesItem: ', additionalExpensesItem);
console.log('depositCheck: ', depositCheck);
console.log('targetAmount: ', targetAmount);
console.log('periodSelect: ', periodSelect);
console.log('resultBudgetMonth: ', resultBudgetMonth);
console.log('esultBudgetDay: ', resultBudgetDay);
console.log('resultExpensesMonth: ', resultExpensesMonth);
console.log('resultAdditionalIncome: ', resultAdditionalIncome);
console.log('resultAdditionalExpenses: ', resultAdditionalExpenses);
console.log('resultIncomPeriod: ', resultIncomPeriod);
console.log('resultTargetMonth: ', resultTargetMonth);
console.log('buttonCalc: ', btnStart);
console.log('btnCancel: ', btnCancel);


