'use strict';

let money = 5500;
let income = 'фриланс';
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
let mission = 150000;
let period = 6;

console.log('money =', typeof money);
console.log('income =', typeof income);
console.log('deposit =', typeof deposit);

console.log(addExpenses.length);

console.log('\"Период равен ' + period + ' месяцев\"' + ' и ' + '\"Цель заработать ' + mission + ' рублей\"');

let massiv = addExpenses.toLowerCase();
console.log(massiv.split(', '));

let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);