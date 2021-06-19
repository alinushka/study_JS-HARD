"use strict";

let num = 123;

// while (Math.abs(num) > 0) {
//   let gg = mult * (num % 10);
//   num = num / 10;
//   console.log(num);
// }

// console.log(gg);

const user = {
  name: "Василий",
  ageYear: 1990,
  online: true,
};

if (user.name === "Василий" && user.ageYear === 1990) {
  console.log(user.name + " админ");
} else {
  console.log(user.name + " пользователь");
}
