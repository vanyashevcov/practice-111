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