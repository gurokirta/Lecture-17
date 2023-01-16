"use strict";

// var number = 0;

// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// for (var i = 1; i < 11; i++) {
//   for (var j = 1; j < 11; j++) {
//     // console.log(`i = ${i} and j = ${j}`);
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// 1

// for (var i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 2

// var amount = 0;

// for (var i = 1; i <= 120; i++) {
//   if (i % 4 === 0) {
//     // console.log(i);
//     amount++;
//   }
// }

// console.log(amount);

// 3

// var number = 9;

// var counter = 0;

// for (var i = 1; i <= parseInt(number); i++) {
//   if (parseInt(number) % i === 0) {
//     counter++;
//   }
// }

// console.log(counter);

// 4

var number_one = parseInt(prompt("შეიყვანეთ პირველი რიცხვი"));
var number_two = parseInt(prompt("შეიყვანეთ მეორე რიცხვი"));

// var number_one = 1;
// var number_two = 15;
while (number_one > number_two) {
  number_one = number_one + number_two; // 16
  number_two = number_one - number_two; // 1
  number_one = number_one - number_two; //15
}

console.log(`number_one- ${number_one} and number_two ${number_two}`);

for (var i = 0; i < parseInt(number_two); i++) {
  if (i > parseInt(number_one)) {
    console.log(i);
  }
}

// console.log(number_between);
// console.log(i);
