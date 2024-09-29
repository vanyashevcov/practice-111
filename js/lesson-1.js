//1. Використовуя if...else,
//напишіть код, який буде питати через prompt:
//"Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMASCRIPT",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"
// *регістр не повинен впливати на правильну відповідь

// let answer = prompt("Яка офіційна назва JavaScript?");

// // if (answer.toUpperCase() === "ECMASCRIPT") {
// //     alert("Вірно!");
// // } else {
// //     alert("Не знаєте? ECMAScript!");
// // }

// alert(answer.toUpperCase() === "ECMASCRIPT" ? "Вірно!" : "Не знаєте? ECMAScript!")





//2. Напишіть программу, яка отримує від користувача
//число (кількість хвилин) через prompt і виводить у консоль
//рядок у форматі годин та хвилин
// 70 === 01:10
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// let answer = prompt("Number")

// let hours = Math.floor(answer / 60);
// let minutes = answer % 60;

// hours = String(hours).padStart(2, "0"); 
// minutes = String(minutes).padStart(2, "0"); 

// console.log(`${hours}:${minutes}`);



//3. Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел
// * перепиши код на функцію getNumbers(min, max)

// const min = 1;
// const max = 9;
// let summa = 0;
// for(let i=max; i>=min; i--) {
//   console.log(i);
//   if(i%2===0) {
//     summa += i;
//   } 
// }
// console.log(summa);

// function getNumbers(min, max) {
//   let summa = 0;
//   for(let i=max; i>=min; i--) {
//     console.log(i);
//     if(i%2===0) {
//       summa += i;
//     }
//   }
//   return summa;
// }

// console.log(getNumbers(1, 9));



// 4. Змінна num може набувати 4 значення: 1, 2, 3 або 4 (запитуй число у користувача через prompt).
// Якщо вона маєзначення '1', то у змінну result запишемо 'winter', якщо має значення '2' - 'spring' і т.д.
// Розв'яжіть завдання через switch-case.

// let answer = prompt("Number?");
// let result = '';

// switch(answer) {
//   case '1': 
//     result = 'winter'; 
//     break;
//   case '2':
//     result = 'spring';
//     break;
//   case '3':
//     result = 'summer';
//     break;
//   case '4':
//     result = 'autumn';
//     break;
//   default:
//     result = 'Number from 1 to 4';
// }

// console.log(result);

