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

// class Worker{
//   constructor(name, salary){
//     this.name = name;
//     this.salary = salary;
//   }

//   getSalary(){
//     return `Worker ${this.name} has salary ${this.salary} dollars`;
//   }
// }

// class WorkerPosition extends Worker{
//   constructor(name, salary, position){
//     super(name, salary);
//     this.position = position;
//   }

//   getPosition(){
//     return `${this.name} works as ${this.position}`
//   }
// }

// const Jhon = new WorkerPosition("Jhon", 100, "developer");

// console.log(Jhon.getSalary());
// console.log(Jhon.getPosition());


// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта


// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }

// const user = {
//   name: 'Kolia',
//   loginOk() {
//     console.log(`${this.name} logged in`)
//   },
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
    
//   }
// }

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 10. Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 },
//   { name: 'Sheep', category: 'meat', price: 9.0, stock: 30 },
//   { name: 'Cow', category: 'meat', price: 2.0, stock: 25 }
// ];

// function getMostExpensiveMeatProduct(products) {
//   return products.filter(product => product.category === 'meat')
//                 .reduce((mostExpensiveMeatProduct, product) => {
//                   if(mostExpensiveMeatProduct.price < product.price) {
//                     return product;
//                   }
//                   return mostExpensiveMeatProduct;
//                 })
// }

// console.log(getMostExpensiveMeatProduct(products));

// 5. Створити клас Contact для створення контакта з полями name, email і phone.
// Потім створиnb клас ContactBook, який буде зберігати список контактів
// і надавати методи для додавання, видалення та пошуку контактів.

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class ContactBook {
  constructor() {
    this.contacts = []
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  removeContact(name){}

  findContact(name){}
}

const contactBook = new ContactBook();

const contact1 = new Contact('Kolia', 'dsde@gmail.com', '8767234');

contactBook.addContact(contact1);

console.log(contactBook);
