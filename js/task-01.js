// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }





// // 01
// // Change code below this line
// const productName = "Droid";
// console.log(productName);
// // 'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem);
// // 2000

// // 02
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem += 1500;
// // Change code below this line

// // 03
// // Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
 
// // 04
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// // 05
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// // Change code below this line

// // 06
// // Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// // 07 
// // Change code below this line
// function sayHi() {
//  console.log("Hello, this is my first function!")   
// }
// sayHi();
// // 08
// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// // console.log(`Addition result equals ${add()}`);
// add(10, 20, 30);
// add(5, 10, 15);
// // console.log(`Addition result equals ${add()}`);
// // console.log()
// // console.log()
// // 09
// function add(a, b, c) {
//  return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
// // 10
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// console.log(makeMessage('Radar', 6150));
// // 11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = pricePerItem * orderedQuantity;

//   // Change code above this line
//   return totalPrice;
// };
// // 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   return message;
// }
// // 13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18 ;

//   // Change code above this line
//   return passed;
// }
// // 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }
// // 15
// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// // 16
// function checkStorage(available, ordered) {
//   let message;
// if (ordered > available) {
//   message = "Not enough goods in stock!"; 
// } else {
//   message = "Order is processed, our manager will contact you."
// }
//   return message;
// }

// // 17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// // 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//   }
//   return message;
// }

// // 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { 
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { 
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// // 20
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0){
//   message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   return message;
// }

// // 21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; 

//   return isInRange;
// }
// // 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; 

//   return canAccessContent;
// }
// // 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; 

//   return isNotInRange;
// }
// // 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
// if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 && totalSpent < 50000) {
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent < 20000) {
//   discount = BRONZE_DISCOUNT;
// } else {
//   discount = BASE_DISCOUNT;
// }
//   return discount;
// }

// // 25
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// message = (ordered > available) ? "Not enough goods in stock!":"The order is accepted, our manager will contact you";
//   // if  {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }

//   // Change code above this line
//   return message;
// }

// // 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message; 
//  message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";

//   return message;
// }

// // 27
// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional":// Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// // 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//  switch (password) {
//    case null: 
//    message = "Canceled by user!";
//    break;

//    case ADMIN_PASSWORD:
//     message = "Welcome!"
//     break;

//     default: 
//     message = "Access denied, wrong password!";
//  }

// //   if (password === null) {
// //     message = "Canceled by user!";
// //   } else if (password === ADMIN_PASSWORD) {
// //     message = "Welcome!";
// //   } else {
// //     message = "Access denied, wrong password!";
// //   }

// //   // Change code above this line
//   return message;
// }

// // 29
// function getShippingCost(country) {
//   let message;
//  switch (country) {
//    case "China":
//    message = "Shipping to China will cost 100 credits";
//    break;

//    case "Chile":
//    message = "Shipping to Chile will cost 250 credits";
//    break;

//    case "Australia": 
//    message = "Shipping to Australia will cost 170 credits";
//    break;

//    case "Jamaica": 
//    message = "Shipping to Jamaica will cost 120 credits";
//    break;

//    default:
//    message = "Sorry, there is no delivery to your country";

//  }
//   return message;
// }

// console.log(getShippingCost("Australia"));
// // 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// // 31
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// // Change code above this line

// // 32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// // 33
// function formatMessage(message, maxLength) {
//   let result;
//   result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Curabitur ligula sapien", 16));

// // 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world"));
// // 35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// // 36
// function checkForSpam(message) {
//   let result;
//   const normalizedMS = message.toLowerCase();
// //  switch (normalizedMS.includes) {
// //    case "spam":
// //    result = true;
// //    break;

// //    case "sale" :
// //    result = true;
// //    break;

// //    default:
// //    result = false;
// //  }
//  result = normalizedMS.includes("spam") || normalizedMS.includes("sale");
//   return result;
// }

// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Amazing SalE, only tonight"));

// let num1 = 1;
// let num2 = 2;
// console.log('сумма: ', num1 + num2);

// let a = 1;
// let b = 2;
// let c = 3; 
// console.log(a + b + c);

// let num = '123';
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
// console.log(sum);

// let num = 123;
// console.log(String(num[0]));