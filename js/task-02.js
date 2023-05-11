// const fr = ["am", "sn", "dn", "fn"];
// const fr = [1, 23, 45, 7, 6, 24,7, 88];
// let total = 0;
// const lastIndex = fr.length - 1;

// for (let i = 0; i < lastIndex; i += 1) {
//     // const element = array[i];
//     // console.log(element);
//     total += fr[i];
//     console.log(total);
// }

// // for (const f of fr) {
// //     console.log(f);
// // }
//     console.log(total);

// console.log(fr);

// const fr = [1, 23, 45, 7, 6, 24, 7, 88];
// let total = 0;

// // for (let i = 0; i < fr.length; i +=1) {
//     // if (fr[i] % 2 === 0) {
//     //     console.log("cet",);
//     //     total += fr[i];
//     // }
// // }

// // console.log("total", total);

// for (const f of fr) {
//         if (fr[f] % 2 === 0) {
//         console.log("cet",);
//         total += fr[f];
//     }
// }

// const fr = ["am", "sn", "dn", "fn"];
// const logTo = "dn";

// for (const f of fr) {
//     console.log(`${f} === ${logTo}`);
//     if (f === logTo) {
//         console.log("Yra");
//         break;
//     }
// }

// const numbers = [1, 23, 45, 7, 6, 24, 7, 88];
// let smalN = numbers[0];

// for (const number of numbers) {
//     console.log(number);

//     if (number < smalN) {
//         smalN = number;
//     }
// }
// console.log("smal", smalN);

// функції

// const add = function (...args) {
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// }

// console.log(add(1, 2, 3, 5, 9));
// console.log(add(1, 2, 3, 5, 9, 8, 4, 10));


// const filterNumbers = function (array, ...args) {
//     const uniqElements = [];
//     for (const element of array) {
//         console.log(element);
//         console.log(args.includes(element));
//         if (args.includes(element)) {
//             uniqElements.push(element);
//         }
//     }
//     return uniqElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7], 2, 4, 6));
// console.log(filterNumbers([11, 22, 33, 44, 55, 66, 77], 22, 44, 66));


// 1
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line


//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
   
//   return "Access denied, wrong password!";
  
//   // Change code above this line
// }

// 3
// function checkStorage(available, ordered) {
//   // Change code below this line
  

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
  

  
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// 4
// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// 5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// // Change code below this line
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// 6
// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";
// // Write your code under this line
// console.log(fruits);

// 7
// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;
// // Change code below this line
// console.log(fruitsArrayLength);

// 8
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line
// console.log(lastElementIndex);
// console.log(lastElement);

// 9
// function getExtremeElements(array) {
//   // Change code below this line
// const firstElement = array[0];
// const lastElementIndex = array.length - 1;
// const lastElement = array[lastElementIndex];
// return [firstElement, lastElement];


//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// 10
// function splitMessage(message, delimeter) {
//   let words = message.split(delimeter);
//   // Change code below this line
//   // Change code above this line
//   return words;
// }

//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));
  
// 11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   let messageSplit = message.split(' ');
//   let totalPrice = messageSplit.length * pricePerWord;
  
//   return totalPrice

//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// 12
// function makeStringFromArray(array, delimeter) {
//   let string = array.join(delimeter);
//   // Change code below this line



//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// 13
// function slugify(title) {
//   // Change code below this line
//   const normalizedTitle = title.toLowerCase();
//   const words = normalizedTitle.split(' ');
//   const slug = words.join('-');

//   return slug
// // return title
// //  .toString()
// //  .toLowerCase()
// //  .replace(/\s+/g, '-')
// //  ;


//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// 16
// function makeArray(firstArray, secondArray, maxLength) {
  
//   const arr = firstArray.concat(secondArray).slice(0, maxLength);
  
//   return arr
//   }

//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

  // 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 18
// function calculateTotal(number) {
//  let sum = 0;

//  for(let i = 0; i <= number; i += 1) {
//    sum += i;
   
//  }
//  return sum;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// 20
// function calculateTotalPrice(order) {
//   let total = 0;
// for(let i = 0; i < order.length; i += 1){
//   total += order[i];
// }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 21
// function findLongestWord(string) {
// let words = string.split(" ");

// let longesWord = words[0];

// for(let word of words) {
//   if(word.length > longesWord.length) {
//     longesWord = word;
//   }
// }
// return longesWord
// }

// 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// 23
// function filterArray(numbers, value) {
//   let big = [];
//   for(let i = 0; i < numbers.length; i += 1) {
//     numbers[i] > value ? big.push(numbers[i]) : "";
   
//   }
//  return big;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
   
//   return fruits.includes(fruit)
// }

// 25
// function getCommonElements(array1, array2) {
// let newArray = [];
// for(const element of array1) {
//   if(array2.includes(element)) {
//     newArray.push(element)
//   }
// }
// console.log(newArray);
// return newArray;

// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let or of order) {
//     total += or;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// 27
// function filterArray(numbers, value) {
 
//   const filteredNumbers = [];

//   for (let numb of numbers) {
//     const number = numb;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
 
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// 28
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// 29
// function getEvenNumbers(start, end) {
//     let arr = [];

//     for(let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//         arr.push(i);
        
//         }
//     }
//     return arr
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 31
// function findNumber(start, end, divisor) {
 
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

//  32
// function includes(array, value) {
//   for (const element of array) {
//   if (element === value) {
//   return true;
// }
//   }
// return false
// }



// function calculateTotal(number) {
//     let total = 0;
    
//     for (let i = 0; i <= number; i += 1) {
        
//         total += i;
     
//     }
//     return total;
// }

// console.log(calculateTotal(18));

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function findLongestWord(string) {
//     const sliceEl = string.split(" ");
//     console.log(sliceEl);
//     let long = sliceEl[0];
//     console.log(long);
//     for (const el of sliceEl) {
//         console.log(el);
//         if (long.length < el.length) {
//             long = el;
//         }
//     }
//     return long;
   
// }
// console.log(findLongestWord("May the force be with you"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
        
//     }
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));

// function filterArray(numbers, value) {
//     const bigger = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         console.log(numbers[i]);
//         numbers[i] > value ? bigger.push(numbers[i]) : "";
        
//     }
//     // for (const number of numbers) {
//     //     console.log(number);
//     //     if (number > value) {
//     //         bigger.push(number);
//     //     }
//     // }
//     return bigger;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   console.log(fruits.includes(fruit));
//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"));

// function getCommonElements(array1, array2) {

//     let allArr = [];
//     for (const number of array1) {
//         array2.includes(number) ? allArr.push(number) : "";
//     }
//     return allArr;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function getEvenNumbers(start, end) {
//     const numbersArr = [];

//     for (let i = start; i <= end; i += 1) {
//         const number = i;
//         console.log(number);
//         number % 2 === 0 ? numbersArr.push(number) : "";
        
//     }
//     return numbersArr;
// }
//   console.log(getEvenNumbers(6, 12));

// function includes(array, value) {
    
//     for (const planet of array) {
//        console.log(`${planet} === ${value} ?`);
//         if (planet === value) {
//             console.log(`Yes ${planet} === ${value}`);
//             return true;
//         }   
//     }
//   return false;
// }

// function includes(array, value) {
//   for (const element of array) {
//   if (element === value) {
//   return true;
// }
//   }
// return false
// }


// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));

