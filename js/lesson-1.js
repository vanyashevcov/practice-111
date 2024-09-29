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
