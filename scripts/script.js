'use strict';

let num = 123;
let mult = 1;

while (Math.abs(num) > 0) {
  mult = mult * (num % 10);
  num = num / 10;
  console.log(num);
}

console.log(mult);