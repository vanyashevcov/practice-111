// // 1. Створіть масив styles з елементами 'jazz' і 'blues'
// // Додайте в кінець 'rock-n-roll'
// // Заменіть значення 'blues' на 'classic'
// // Напишіть функцію logItems(array), яка приймає
// // масив і використовує цикл for, який для кожного елемента
// // буде виводити повідомлення у форматі:
// // <номер елемента> - <значення елемента>
// // Нумерація має починатись з 1

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// // styles[1] = 'classic';
// const ind = styles.indexOf('blues');
// if(ind !== -1) {
//   styles[ind] = 'classic';
// }

// function logItems(array) {
//   for(let i=0; i < array.length; i++) {
//     console.log(`${i+1} - ${array[i]}`);

//   }
// }
// logItems(styles);

// 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// чи є ім'я введене в prompt у цьому масиві і у разі,
// якщо є - виводить повідомлення в alert "Welcome, <name>!"
// в іншому випадку - "User not found"

//  const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const nameUser = prompt('Enter your name.');

//   // for(const name of array) {
//   //   if(name === nameUser) {
//   //     alert(`Welcome, ${nameUser}!`);
//   //     return;
//   //   }

//   // }
//   // alert("User not found");

//   alert(array.includes(nameUser) ? `Welcome, ${nameUser}!` : "User not found" );
// }

// checkLogin(logins);

// 3. Напишіть функцію, яка складатиме сусідні числа і пушитиме їх в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNumbers(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     newArr.push(arr[i] + arr[i + 1]);
//   }
//   return newArr;
// }

// console.log(sumNumbers(someArr));

// 4. Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   let total = 0;
//   let divider = arguments.length;
//   for (const num of arguments) {
//     if (typeof num === "number") {
//       total += num;
//     } else {
//       divider -= 1;
//     }
//   }
//   return total / divider;
// }

// console.log(calculateAverage(1, 5, 9, 7, "dsfas"));



// 5. Напишіть функцію, яка шукатиме найдовше слово у реченні
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//     const words = string.split(" ");
//     let longestWord = words[0];
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord("London is the capital of Great Britain"));



// 6. Напишіть функцію, яка перевіряє, чи є
// рядок (без урахування регістра) паліндромом.
// Паліндром — це слово, число, фраза або інша
// послідовність символів, яка читається як
// в обратному, так і в прямому напрямку, наприклад,
// madam або racecar
// console.log(isPalindrome("Abba")); //true
// console.log(isPalindrome("hello")); //false


// function isPalindrome(string) {
//     let word = string.toLowerCase();
//     // let reverWord = "";

//     // for (let i = word.length - 1; i >= 0; i--) {
//     //     reverWord += word[i];
//     // }
//     // return word === reverWord;

//     return word === word.split("").reverse().join("");

// }

// console.log(isPalindrome("Abba")); //true
// console.log(isPalindrome("hello")); //false


// 7. Напиши скрипт, який для об'єкту user,
// послідовно:
// 1 - додасть поле mood зі значенням 'happy'
// 2 - замінить hobby на 'skydiving'
// 3 - замінить значення premium на false
// 4 - виводить зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of
// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const userkeys = Object.keys(user);
// for (const key of userkeys) {
//     console.log (`${key}: ${user[key]}`)
// }


// 8. Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// let sum = 0;
// const values = Object.values(salaries);
// for (const val of values) {
//     sum += val;
// }
//  console.log(sum);

// 9. Напишіть ф-цію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів і
// рядок з назвою фрукта.
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ]

// function calcTotalPrice(fruits, fruitName) {
//     let totalPrice = 0;

//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             totalPrice += fruit.price * fruit.quantity;
//         }
//     }
//     return totalPrice;
// }

// console.log(calcTotalPrice(fruits, "Банан"));

// 10. Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх
// як властивості об'єкта
// sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() возводить першу властивсть в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку на наявність властивостей в об'єкті в окремий метод exist ()

// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum(){
//         if (this.exist()) {
//             return this.a + this.b;
//         }
//         return "Values not found"
//     },
//     mult(){
//         if (this.exist()) {
//             return this.a * this.b;
//         }
//         return "Values not found"
//     },
//     raise(){
//         if (this.exist()) {
//             return this.a ** this.b;
//         }
//         return "Values not found"
//     },
//     exist(){
//         return this.a && this.b;
//     }
// };

// calculator.read(7, 2);
// console.log(calculator.sum()); 
// console.log(calculator.mult());
// console.log(calculator.raise());
