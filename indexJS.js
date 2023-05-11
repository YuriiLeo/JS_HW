// function greet(name) {
//     return `Ласкаво просимо ${name}.`;
//   }
  
//   // Викликаємо функцію greet і виводимо результат у консоль
//   console.log(greet("Манго")); // Ласкаво просимо Манго.
  
//   // Виводимо функцію greet у консоль, не викликаючи її
//   console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// Колбек-функція

// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }
  
//   // Функція вищого порядку
//   function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   registerGuest("Манго", greet);

// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   // Передаємо інлайн функцію greet у якості колбека
//   registerGuest("Манго", function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   });
  
//   // Передаємо інлайн функцію notify у якості колбека
//   registerGuest("Полі", function notify(name) {
//     console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
//   });

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }
  
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`З'єднуємо з ${name}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//     // Логіка запису голограми
//   }
  
//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Полі", takeCall, leaveHoloMessage);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);

// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     console.log(this.potions.includes(newPotion));

//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// };


// const names = ['Ivan', 'Olga', 'Olga', 'Ann', 'Olga'];
// function changeName (arr, name, newName) {
//   const aroow = [];
//   for (let i = 0; i < arr.length; i += 1){
//     if (name === arr[i]) {
//       arr[i] = newName;
//       console.log(`Name changed on ${newName}`);
//       continue;
//     } console.log (`this user name ${arr[i]} ...`)
    
//   }
 
// }
// changeName (names, 'Olga', 'Anastasiya')

// const technologies = [
//   {
//     title: "HTML",
//     description: "HyperText Markup Language",
//   },
//   {
//     title: "CSS",
//     description: "Cascading Style Sheets",
//   },
//   {
//     title: "JavaScript",
//     description: "JavaScript language",
//   },
//   {
//     title: "React",
//     description: "JavaScript library",
//   },
// ];

// function createLink(array) {
//     return array.reduce(
//         (acc, item) => acc + `<li data-description = "${item.description}">${item.title}</li>`, "");
// }
// // console.log(createLink());
// const result = createLink(technologies);

// const list = document.querySelector(".list");
// list.insertAdjacentHTML("beforeend", )




// // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// //not found
// 1. Perebratu masuv, znaytu obektu z pystum kluchem "know"
// 2. Yaksho znayshlu zapushutu v novui masuv
// 3. Perevirutu skilku uzeriv y novomy masuvi
// 4. Yaksho tam bilshe odnogo prervatu funkciu


// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: ['Ivan']
//     },
//     {
//         name: 'Eva',
//         know: ['Jhon', 'Ivan']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// //Not found
// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// // jhon
// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// //Not found
// const people4 = [{
//         name: 'Alex',
//         know: ['Eva'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex','Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },


// ];
// // jhon

// function findNarcis(arr) {
    
//     const names = arr.filter(item => {
//         if (!item.know.length) {
//             return item;
//         }
//     })
   

//     if (names.length !== 1) {
//         console.log("Not found");
//         return;
//     }

//     const targetName = names[0].name;
   
//     const response = arr.some(element =>
//         !element.know.includes(targetName) && element.name !== targetName);
    
// if (response) {
//     console.log("Not found");
//         return;
// }
// console.log(targetName);
// }

// findNarcis(people1);
// findNarcis(people2);
// findNarcis(people3);
// findNarcis(people4);

// const numbers = [1,2,3,2,1,2,4]

// const deadline = new Date(2023, 0, 1);
// const daysEl = document.querySelector("[data-days]");
// const hoursEl = document.querySelector("[data-hours]");
// const mitutesEl = document.querySelector("[data-minutes]");
// const secondsEl = document.querySelector("[data-seconds]");

// function timer() {
//     const today = new Date();
// const delta = deadline - today;
// const seconds = Math.floor(delta / 1000) % 60;
// const mitutes = Math.floor(delta / 1000 / 60) % 60;
// const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
// const days = Math.floor(delta / 1000 / 60 / 60 / 24);
//     daysEl.textContent = days < 10 ? `0${days}` : days;
//     hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
//     mitutesEl.textContent = mitutes < 10 ? `0${mitutes}` : mitutes;
//     secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds

// }
// setInterval(timer, 1000);



// const STORAGE_KEY_FEEDBACK = 'feedback-form-state';

// const dataObj = {};

// const formEl = document.querySelector('.feedback-form');
// const inputEl = document.querySelector('.feedback-form input');
// const textareaEl = document.querySelector('.feedback-form textarea');

// function parsedObject() {
//   if (localStorage) {
//     const savedDataObj = localStorage.getItem(STORAGE_KEY_FEEDBACK);
//     return JSON.parse(savedDataObj);
//   }
// }

// function saveDataFormInObject(evt) {
//   dataObj[evt.target.name] = evt.target.value;
//   localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(dataObj));
// }

// function checkDataInStorage(data) {
//   console.log(localStorage);
//   if (data) {
//     console.log(data);
//     inputEl.value = data.email || '';
//     textareaEl.value = data.message || '';
//   }
// }

// function clearLocalStorage(event) {
//   event.preventDefault();

//   console.log(dataObj);
//   console.log(dataObj.email);
//   console.log(dataObj.message);

//   formEl.reset();
//   localStorage.removeItem(STORAGE_KEY_FEEDBACK);
// }

// checkDataInStorage(parsedObject());
// formEl.addEventListener('input', saveDataFormInObject);
// formEl.addEventListener('submit', clearLocalStorage);



// Планувальник settimaut

// console.log("do vuzova set");

// setTimeout(() => {
//     console.log("1 vsereduni set");
// }, 3000,
// );

// setTimeout(() => {
//     console.log("2 vsereduni set");
// }, 1000,
// );

// console.log("pislya vukluky set");

    //   Проміси

// const promise = new Promise((resolve, reject) => {
//     let total = 0;

//     for (let i = 0; i < 1000000000; i++) {
//         total += i;
//     }

//     if (total % 2 === 0) {
//         resolve(total);
//     } else {
//         reject("Error");
//     }
// });

// promise
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("finally"));


// promise
// .then(
//         (data) => console.log(data),
//         (error) => console.log(error))
// .then(
//         (data) => console.log(data),
//         (error) => console.log(error))
// .then(
//         (data) => console.log(data),
//         (error) => console.log(error))

// .finally(() => console.log("finally"));
    

// function promiseCreator(conter) {
//     return new Promise((resolve, reject) => {
//     let total = 0;

//     for (let i = 0; i < conter; i++) {
//         total += i;
//     }

//     if (total % 5 === 0) {
//         resolve(total);
//     } else {
//         reject("Error");
//     }
// });
// }

// promiseCreator(10)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// promiseCreator(100)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
    
// Promise.all([promiseCreator(10), promiseCreator(101)])
//     .then((data) => {
//         console.log("data", data);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     });
// Promise.race([promiseCreator(101), promiseCreator(10000001)])
//     .then((data) => {
//         console.log("data", data);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     });
// Promise.allSettled([promiseCreator(99), promiseCreator(10)])
//     .then((data) => {
//         console.log("data", data);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     });

// // Таймер

// const timer = {
//     start() {
//         const startTime = Date.now();
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const { hours, mins, secs } = getTimeComponents(deltaTime);
//             console.log(`${hours}:${mins}:${secs}`);

            
//         }, 1000);
//     },
// };

// timer.start();

// function pad(value) {
//     return String(value).padStart(2, "0");
// }

// function getTimeComponents(time) {
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
// }


// Проміси Репета

// const promise = new Promise

// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;

//         if (canFulfill) {
//             resolve("Promis vukonanuy yspishno");
//         }

//         reject("Promis vukonavsya z pohubkoyu");

// });


// promise
//     .then(result => {
//         console.log(result);

//         return 5;
//     })
//     .then(x => {
//         console.log(x);

//         return 10;
//     })
//     .then(y => {
//         console.log(y);
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.log("y vukonanui y byd yakomy vupadky"));

//     function  onFulfilld(result) {
//         console.log("onFulfilld -> onFulfilld");
//         console.log(`${result}`);
// };
    
// function onRejected(error) {
//     console.log("onRejected -> onRejected");
//     console.log(`${error}`);
// }


// ////////////////

// const cars = [
//   {
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//   },
//   {
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     },
//   {
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//   },
//   {
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//   },
//   {
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//   },
// ];


// const refs = {
//     minPrice: document.querySelector(".min"),
//     maxPrice: document.querySelector(".max"),
//     result: document.querySelector(".message"),
//     btnSubmit: document.querySelector(".btn"),
// }

// refs.btnSubmit.addEventListener("click", onFormSubmit);

// function onFormSubmit() {

//     const minPr = Number(refs.minPrice.value);
//     const maxPr = Number(refs.maxPrice.value);
//     const allCars = cars.filter(car => car.price >= minPr && car.price <= maxPr);
//     console.log(allCars);
//     const message = allCars.reduce((acc, car, index) => {
//         acc += `${index + 1}\n ${car.car} ${car.type} ціна - ${car.price}`;
//         return acc;
//     },
//         allCars.length ? `Кількість знайдених автомобілів ${allCars.length}\n` : `Вибачте але за вашим пошуком жодного авто не було знайдено.`);
//     refs.result.innerHTML = message;
// }

// function onResult({car, type, price}) {
   
// }

// Створити функцію яка приймає марку авто і колбек функцію для пошуку авто, функція повертає в консоль кількість знайдених авто , марку авто, модель і вартість авто

// Повертає стрінгу з знаденимим авто

// Кількість знайдених автомобілів 2:
// 1. Honda Accord, ціна 20000
// 2. Honda Civic, ціна 12000

// Якщо не було знайдено жодного авто ми маємо вивести

// Вибачте але за вашим пошуком жодного авто не було знайдено.


// //////////////////////

// Потрібно створити функцію яка буде приймати 1 параметр str і повертає обєкт де ключ це літера яка є в стрінгі,
//  а значеня це кількість раз скільки літера зустрічається в стрінгі

//  {d : 3, s : 4, f :2}


// const str = 'dsfsdaasfdaas';
 
// const arrStr = str.split("");

// const obj = arrStr.reduce((acc, elem) => {
//     // if (!acc.hasOwnProperty(elem)) {
//     //     acc[elem] = 1;
//     // } else {
//     //     acc[elem] += 1;
//     // }
//     !acc.hasOwnProperty(elem) ? acc[elem] = 1 : acc[elem] += 1
//     return acc;
// }, {});
// console.log(obj);


// fetch("https://swapi.dev/api/people/")
//     .then(response => response.json())
//     .then(data => console.log(data));