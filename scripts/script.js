"use strict";

const num = 266219;
const strNum = num.toString();

let mult = 1;
for (let i = 0; i < strNum.length; i++) {
  mult *= strNum[i];
}
console.log('переумножение: ', mult);

const n = mult ** 3;
console.log('первые 2 цифры числа, возведенного в 3 степень: ', n.toString().substring(0, 2));