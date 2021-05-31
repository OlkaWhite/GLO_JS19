let money = 1200;
let income = 500;
let addExpenses = "Car, Phone, Credit, Utility";
let deposit = true;
let mission = 5000;
let period = 12;


console.log(typeof money);
console.log(typeof income);
console.log(typeof addExpenses);
console.log('Длина строки addExpenses составляет ' + addExpenses.length + ' символов');

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' бел рублей.');

// let arrExpenses = addExpenses.toLowerCase(); // по логике вещей как-то наверное можно объединить в один метод
// console.log(arrExpenses.split(', '));

let arrExpenses = addExpenses.toLowerCase().split(', ');
console.log(arrExpenses);

let budgetDay = money / 30;
console.log('Дневной бюджет составляет ' + budgetDay + ' рублей');




//alert('Скоро сделаем калькулятор');

//console.log('У тебя все получится!');


