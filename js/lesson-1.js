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

//5. Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "admin",
//то prompt запрашує пароль.
//Якщо нічого не ввели чи нажали Cancel
//вивести в alert рядок "Cancel!"
//В противному випадку вивести рядок "Who are you?!"

//Пароль перевіряти так:
//Якщо введен пароль "123456",
//то вивести рядок "Welcome, boss!"
//в іншому випадку виводити рядок "Wrong password!"

// let login = prompt("Enter your login");
// console.log(login);

// if (login === "admin") {
//     let password = prompt("Enter your password")
//     alert(password === "123456" ? "Welcome, boss!" : "Wrong password!")
// // if (password === "123456") {
// //     alert("Welcome, boss!");
// // } else {
// //     alert("Wrong password!");
// // }
// } else if(login === "" || login === null){
// alert("Cancel!");
// } else {
//     alert("Who are you?!");
// }

// 6. Напишіть функцію checkNumber(num), яка перевіряє число:
// Якщо число ділитися на 3 повертати "fizz"
// Якщо ділитися на 5 повертати "buzz"
// Якщо ділитися на 3 і на 5 повернути "fizzbuzz"
// Додайте перевірку, що параметр дійсно є числом (в іншому випадку
// функція має повертати "Not a number")
// В якості дефолтного випадку повернути "Error!"

// function checkNumber(num) {
//     if (typeof num !== "number") {
//         return "Not a number";
//     }
//     if (num%3 === 0 && num%5 === 0) {
//         return "fizzbuzz";
//     }
//     if (num%3 === 0) {
//         return "fizz";
//     }
//     if (num%5 === 0) {
//         return "buzz";
//     }
//     return "Error!";
// }
// console.log(checkNumber(1));

// 7. Напишіть функцію, яка перевертатиме рядок у зворотньому порядку

// function string(str) {
//     let newstr = "";
//     // // for (let i = str.length - 1; i >= 0; i--){
//     // //     // console.log(str[i]);
//     // //     newstr += str[i];
//     // }

//     for (const element of str) {
//         newstr = element + newstr
//     }
//     return newstr

// }
// // string("hi")
// console.log(string("independent"));

// 8. Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt

// let answer = prompt("enter number more then 100");
// while (answer < 100 && answer) {
//     answer = prompt("enter number more then 100")

// }
// console.log(answer);

// 9. В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);

// if (minuteValue <= 15) {
//   console.log(`${minuteValue} - first quater`);
// }
// if (minuteValue > 15 && minuteValue <= 30) {
//   console.log(`${minuteValue} - second quater`);
// }
// if (minuteValue > 30 && minuteValue <= 45) {
//   console.log(`${minuteValue} - third quater`);
// }
// if (minuteValue > 45) {
//   console.log(`${minuteValue} - fourth quater`);
// }

// 10. Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть в alert 'Yes', в іншому випадку - 'No'.

// const str = prompt("Enter string");
// if (str.startsWith("a")) {
//   alert("Yes");
// } else {
//   alert("No");
// }

// const str = prompt("Enter string");
// if (str[0] === "a") {
//   alert("Yes");
// } else {
//   alert("No");
// }
// 11. При завантаженні сторінки користувачу пропонується
// в prompt ввести число. Ввод додається к значенню
// змінної total.
// Операція вводу числа продовжується до тих пір,
// доки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач закінчив ввод натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
// * Додати перевірку,що користувач ввів саме число,
// а не довільний набір символів.

let total = 0;
let answer = prompt("Enter your number");
while (answer) {
  if (!Number.isNaN(Number(answer))) {
    total += Number(answer);
  }
  answer = prompt("Enter your number");
}
alert(`Загальна сумма введенних чисел дорівнює ${total}.`);
