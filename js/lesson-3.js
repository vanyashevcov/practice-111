const tweets = [
  { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
  {
    id: "001",
    name: "Kate",
    gender: "female",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
  {
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];

// 1. Створити функцію getNames(array), яка приймає масив об'єктів
// і повертає масив імен усіх користувачів (поле name).
// *зробити функцію універсальною getRandomValues(array, prop), щоб вона повертала
// масив значень будь-якої заданої властивості
// **з перевіркою наявності такої властивості:
// якщо властивості немає - повертати 'Sory, no such property in array!'

// function getNames(array) {
//   return array.map((item) => item.name);
// }

// function getRandomValues(array, prop) {
//   if (!array[0][prop]) {
//     return "Sorry, no such property in array!";
//   }
//   return array.map((item) => item[prop]);
// }

// console.log(getNames(tweets));
// console.log(getRandomValues(tweets, "gendr"));

// 2. Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)

// function getUsersWithJs(array) {
//   return array.filter((item) => item.tags.includes("js"));
// }

// console.log(getUsersWithJs(tweets));

// 3. Написати функцію getUsersWithGender(array, gender), яка приймає масив і стать
// і повертає масив імен користувачів по цій статі (властивість gender)

// function getUsersWithGender(array, gender) {
//   // return array.filter(item => item.gender===gender)
//   //             .map(item => item.name);
//   return array.reduce((nameUsers, item) => {
//     if(item.gender === gender) {
//       nameUsers.push(item.name)
//     }
//     // item.gender === gender && nameUsers.push(item.name);
//     return nameUsers;
//   }, [])
// }

// console.log(getUsersWithGender(tweets, 'male'));

// 4. Написати функцію getSortedUniqueTags(array), яка приймає масив
// і повертає масив всіх тегів усіх користувачів (поле tags), при цьому не повинно бути
// повторювань тегів і вони мають бути відсортовані в алфавітному порядку.
// Використай ланцюжок методів.

// function getSortedUniqueTags(array) {
//   return array.flatMap(item => item.tags)
//               .filter((item, i, arr) => arr.indexOf(item) === i)
//               .toSorted((a, b) => a.localeCompare(b));
// }

// console.log(getSortedUniqueTags(tweets));

// 5. Напишіть функцію getStatisticsOfTags(array), яка приймає масив
// і повертає об'єкт статистики, який враховує скільки разів повторюється кожен тег
// в усіх користувачів разом (не для кожного окремо)
// має бути відповідь: {js: 5, nodejs: 5, html: 2, css: 2, react: 4}

// function getStatisticsOfTags(array) {
//   return array.flatMap(user => user.tags)
//     .reduce((stat, tag) => {
//       if (stat[tag]) {
//         stat[tag] += 1;
//       } else {
//         stat[tag] = 1;
//       }
//       return stat;
//   }, {})
// }

// console.log(getStatisticsOfTags(tweets));

// 7. Є масив чисел, наприклад: arr = [1,2,3,4,5]
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Іншими словами, виклик getSums(arr) має повертати новий масив з такої ж
// кількості елементів, в якому на кожній позиції буде сума елементів масива
// до цієї позиції включно

// Наприклад: для arr = [1,2,3,4,5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція не має змінювати вхідний масив
// Використовуйте метод reduce

// function getSums(arr) {
//   return arr.reduce((newArray, item, index) => {
//     newArray.push(item + newArray[index - 1] || item)
//     return newArray;
//   }, [])
// }

// console.log(getSums([1, 2, 3, 4, 5]));

// 1. Створи клас User для створення користувача з такими властивостями:
// a. userName - ім'я, рядок
// b. age - вік, число
// c. numberOfPosts - кількість постів, число
// d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// Додай метод getInfo(), який повертає рядок:
// `Користувачеві <name> <age> років і в нього <posts> публікацій.`
// Додай метод updateNumberOfPosts(amount), який оновлює кількість постів юзера
// де amount - це число, кількість постів, що має додаватись до вже існуючих у властивості numbersOfPost

// class User {
//   constructor(object) {
//     this.userName = object.userName;
//     this.age = object.age;
//     this.numberOfPosts = object.numberOfPosts;
//   }

//   getInfo() {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPosts} публікацій.`;
//   }

//   updateNumberOfPosts(amount) {
//     this.numberOfPosts += amount;
//   }
// }

// const someUser = new User({
//   userName: "Petya",
//   age: 22,
//   numberOfPosts: 5,
// });

// console.log(someUser);

// console.log(someUser.getInfo());

// someUser.updateNumberOfPosts(5);

// console.log(someUser);

// 2. Напиши класс Client який створює об'єкт
// із властивостями login, email
// Об'яви приватні властивості #login і #email,
// доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const someClient = new Client("Petya", "petya@gmail.com");

// console.log(someClient.getClientData);

// someClient.changeEmail = "superPetya@gmail.com";

// console.log(someClient.getClientData.email);

// 3. Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority),

// class Notes {
//   static Priority = {
//     HIGH: "high",
//     MIDDLE: "middle",
//     LOW: "low"
//   };

//   constructor (){
//     this.items = [];
//   }

//   getNotes(){
//     return this.items;
//   }

//   addNote(note){
//     this.items.push(note);
//   }

//   removeNote(noteText){
//     this.items = this.items.filter(item => item.text !== noteText);
//   }

//   updatePriority(noteText, newPriority){
//     const note = this.items.find(item => item.text === noteText);
//     if (note) {
//       note.priority = newPriority;
//     }
//   }
// }

// const notes = new Notes();

// notes.addNote({text: "Java", priority: Notes.Priority.HIGH});
// notes.addNote({text: "Node.js", priority: Notes.Priority.LOW});
// notes.addNote({text: "html", priority: Notes.Priority.MIDDLE});

// console.table(notes.getNotes());

// notes.removeNote("html");

// notes.updatePriority("Java", Notes.Priority.LOW);

// console.table(notes.getNotes());

// 4. Створити клас Worker, у якого є властивості name і salary.
// У класу Worker є метод getSalary, який повертає повідомлення
// "Worker <name> has salary <salary> dollars"
// Створити клас WorkerPosition, у якого є властивість position
// і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

class Worker{
  constructor(name, salary){
    this.name = name;
    this.salary = salary;
  }

  getSalary(){
    return `Worker ${this.name} has salary ${this.salary} dollars`;
  }
}

class WorkerPosition extends Worker{
  constructor(name, salary, position){
    super(name, salary);
    this.position = position;
  }

  getPosition(){
    return `${this.name} works as ${this.position}`
  }
}

const Jhon = new WorkerPosition("Jhon", 100, "developer");

console.log(Jhon.getSalary());
console.log(Jhon.getPosition());

