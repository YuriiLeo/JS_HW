// ЗАВДАННЯ 1

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
  
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
  
//   };
//   console.log(pizzaPalace.order("Smoked"));

//   ЗАВДАННЯ 2

//   const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
    
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
  
// ЗАВДАННЯ 3

// const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
   
//     getOrdersLog() {
//       return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
//   };

// ЗАВДАННЯ 4

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
  
//   const child = Object.create(parent);
  
//   child.name = "Jason";
//   child.age = 27;
  
// ЗАВДАННЯ 5

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;

// ЗАВДАННЯ 6

// class Car {
    
// }

// ЗАВДАННЯ 7

// class Car {
//     constructor(brand, model, price) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//    }
   
// ЗАВДАННЯ 8

// class Car {
//     constructor({brand, model, price}) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//   }
  
// ЗАВДАННЯ 9

// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//    getPrice() {
//      return this.price;
//    }
  
//    changePrice(newPrice) {
//      return this.price = newPrice;
//    }
//   }
  
// ЗАВДАННЯ 10

// class Storage {
//     constructor (items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }

//     addItem(newItem) {
//         return this.items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         return this.items.splice(this.items.indexOf(itemToRemove), 1);
//     }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ЗАВДАННЯ 11

// class StringBuilder {
//   constructor (initialValue) {
//       this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }
  
//   padStart(str) {
//       this.value = str + this.value;
//   }

//   padBoth(str) {
//        this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ЗАВДАННЯ 12

// class Car {
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//  getBrand() {
//    return this.#brand;
//  }

// changeBrand(newBrand) {
//  this.#brand = newBrand;
// }
// }

// ЗАВДАННЯ 13

// class Storage {
//   #items;
//    constructor(items) {
//      this.#items = items;
//    }
 
//    getItems() {
//      return this.#items;
//    }
 
//    addItem(newItem) {
//      this.#items.push(newItem);
//    }
 
//    removeItem(itemToRemove) {
//      this.#items = this.#items.filter(item => item !== itemToRemove);
//    }
//  }
 
//  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//  storage.addItem("Droid");
//  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//  storage.removeItem("Prolonger");
//  console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
 
// ЗАВДАННЯ 14

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ЗАВДАННЯ 15

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// ЗАВДАННЯ 16

// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       return this.#price};
//     this.#price = newPrice;
//   }
// }

// варіант 2
// // або   set price(newPrice) {
// //   if (newPrice <= Car.MAX_PRICE) {
// //     return this.#price = newPrice;};
// // }
// // }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ЗАВДАННЯ 17

// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice (price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum"
//     }
//     return "Success! Price is within acceptable limits"
//   }
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ЗАВДАННЯ 18

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser"};
// }

// ЗАВДАННЯ 19

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// constructor ({email, accessLevel}) {
//   super(email);
//   this.accessLevel = accessLevel;
//  }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ЗАВДАННЯ 20

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
  
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   blacklistedEmails = [];
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

// blacklist(email) {
//    this.blacklistedEmails.push(email);
// }


//   isBlacklisted(email) {
//    return this.blacklistedEmails.includes(email) ? true : false;
//        ;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// ЗАВДАННЯ з практичного


// const user = {
//   name: "Yurii",
//   sayHello(age, city) {
//     console.log(`Hello ${this.name}. I am ${age} from ${city}`);
//   },
// };

// user.sayHello(35, "Kyiv");

// const user2 = {
//   name: "Artem",
// };
// user.sayHello.call(user2, 26, "Vinnitsya"); //call
// user.sayHello.apply(user2, [26, "Vinnitsya"]); //apply

// const newSayHello = user.sayHello.bind(user2);
// newSayHello(27, "Mariupol");
// newSayHello(30, "Che");

// class User {
//   constructor (nickName, email, hp = 100) {
//     this.nickName = nickName;
//     this.email = email;
//     this.hp = hp;
//   }
// }

// class People extends User {
//   constructor(nickName, email, hp = 100) {
//     super(nickName, email, hp);
//   }
//   stun(time = 1) {
//     console.log(`${this.nickName} atack with stun on ${time} seconds`);
//   }
// }

// class Warrior extends People {
//   constructor(nickName, email, damage, hp = 100) {
//     super(nickName, email, hp);
//     this.damage = damage;
//   }
//   swordAttack() {
//     console.log(`${this.nickName} atack with sword on ${this.damage} damage`);
//   }
// }

// const person1 = new Warrior(prompt("Add nickname"), prompt("Add email"), prompt("Add damage"));
// console.log(person1);

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// // do {
// //   password = prompt("Введіть пароль довший 4-х символів", "");
// // } while (password.length < 5);

// // console.log("Ввели пароль: ", password);

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
// console.log("Знай    шли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// function formatMessage(message, maxLength) {
//   let result;
//   result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Curabitur ligula sapien", 16));


