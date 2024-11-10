// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const ul = document.createElement('ul');
// const buttonAdd = document.createElement('button');
// const buttonRemove = document.createElement('button');
// const input = document.createElement('input');

// document.body.append(input, buttonAdd, buttonRemove, ul);

// buttonAdd.textContent = 'Add';
// buttonRemove.textContent = 'Remove';

// const handleClickAdd = () => {
//   const str = input.value.trim();
//   if(!str) {
//     return;
//   }
//   const li = document.createElement('li');
//   li.textContent = str;
//   ul.append(li);

//   if(ul.children.length % 2 === 0) {
//     li.style.backgroundColor = 'yellow';
//   } else {
//     li.style.backgroundColor = 'blue';
//   }

//   input.value = '';
// }
// const handleClickRemove = () => {
//   if(!ul.lastChild) {
//     return;
//   }
//   ul.lastChild.remove();
// }

// buttonAdd.addEventListener('click', handleClickAdd);
// buttonRemove.addEventListener('click', handleClickRemove);

// 2. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)"
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const figure = document.createElement('div');

// const changeFigureStyle = () => {
//   figure.style.cssText = forms[randomither(forms.length - 1)];
//   figure.style.backgroundColor = getRandomHexColor();
//   figure.style.position = 'absolute';
//   figure.style.top = `${randomither(100)}%`;
//   figure.style.left = `${randomither(100)}%`;
// }

// changeFigureStyle();

// document.body.append(figure);

// figure.addEventListener('click', changeFigureStyle);



// 3. Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка
// const tweets = [
//   { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
//   {
//     id: "001",
//     name: "Kate",
//     gender: "female",
//     likes: 2,
//     tags: ["html", "css"],
//   },
//   {
//     id: "002",
//     name: "Maria",
//     gender: "female",
//     likes: 17,
//     tags: ["html", "js", "nodejs"],
//   },
// {
//     id: "003",
//     name: "Borys",
//     gender: "male",
//     likes: 8,
//     tags: ["css", "react"],
//   },
//   {
//     id: "004",
//     name: "Jhon",
//     gender: "male",
//     likes: 10,
//     tags: ["js", "nodejs", "react"],
//   },
// {
//     id: "005",
//     name: "Anna",
//     gender: "female",
//     likes: 3,
//     tags: ["js", "nodejs", "react"],
//   },
//   {
//     id: "006",
//     name: "Jhon",
//     gender: "male",
//     likes: 0,
//     tags: ["js", "nodejs", "react"],
//   },
// ];

// const ul = document.querySelector('.stats');
// const markup = tweets.map(tweet => `
//   <li class='stats-item ${tweet.gender}'>
//     <p class='stats-name'>${tweet.name}</p>
//     <p class='stats-likes'>${tweet.likes}</p>
//     <p class='stats-tags'>${tweet.tags.join(', ')}</p>
//   </li>
//   `).join('');

// ul.insertAdjacentHTML('beforeend', markup);



// 4. Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const input = document.querySelector("#passwordInput");
// const button = document.querySelector("#passwordButton");

// button.addEventListener("click", handleClicker);
// function handleClicker() {
//     if (button.textContent === "Розкрити") {
//         button.textContent = "Приховати";
//          input.style.color = "inherit";
//     }
//     else{
//         button.textContent = "Розкрити";
//     input.style.color = "transparent";
//     }
// }


// 5. Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази


// const button = document.querySelector("#double");
// const items = document.querySelectorAll(".listItem");

// button.addEventListener("click", handleClicker);
// function handleClicker() {
//     items.forEach(item => {
//         item.textContent *= 2;
//     })
// }


// 7. Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const div = document.querySelector(".eventThumb");

// document.addEventListener("keydown", keyClicker);
// function keyClicker(event) {

//     const markup = ` 
//     <ul class="eventList">
//         <li class="eventCode"> ${event.code}</li>
//         <li class="eventKey"> ${event.key}</li>
//       </ul>`
    
//     div.insertAdjacentHTML("beforeend", markup);
   
    
    
// }

