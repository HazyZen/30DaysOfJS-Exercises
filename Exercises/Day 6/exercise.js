// Exercise Level 1

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }
// let j = 0;
// while (j < 11) {
//   console.log(j);
//   j++;
// }
// let k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k < 11);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let j = 10;
// while (j >= 0) {
//   console.log(j);
//   j--;
// }

// let k = 10;
// do {
//   console.log(k);
//   k--;
// } while (k >= 0);

// 3. Iterate 0 to n using for loop

// 4. Write a loop that makes the following pattern using console.log():

// let more = "";
// for (let i = 0; i < 7; i++) {
//   let hashtag = "#";
//   more += hashtag;
//   console.log(more);
// }

// 5. Use loop to print the following pattern

// for (let i = 0; i < 11; i++) {
//   const number = (i) => {
//     sum = i * i;
//     console.log(i + " X " + i + " = " + sum);
//   };
//   number(i);
// }

// 6. Using loop print the following pattern
// console.log("i  i^2  i^3");
// for (let i = 0; i < 11; i++) {
//   const one = (i) => {
//     let num = i;
//     return num.toString();
//   };
//   const powerTwo = (i) => {
//     let num = i ** 2;
//     return num.toString();
//   };
//   const powerThree = (i) => {
//     let num = i ** 3;
//     return num.toString();
//   };
//   console.log(one(i) + "  " + powerTwo(i) + "  " + powerThree(i));
// }

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
/*
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
/*
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
*/
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let i = 1; i <= 100; i++) {
//   for (let j = 2; j < i; j++) {
//     }
//   }
// };  UNFINISHED

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sumAll = 0;
// for (let i = 1; i <= 100; i++) {
//   const sum = (i) => {
//     sumAll += i;
//     if (i === 100) {
//       console.log(sumAll);
//     }
//   };
//   sum(i);
// }

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }
// console.log("Sum of all even numbers: " + sumEven);
// console.log("Sum of all odd numbers: " + sumOdd);
// 12. Print sum of evens and sum of odds as array
// let arrayEven = sumEven.toString().split(" ");
// let arrayOdd = sumOdd.toString().split(" ");
// console.log(arrayEven.concat(arrayOdd).map(Number));

// 13. Develop a small script which generate array of 5 random numbers
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   const randomNumber = Math.floor(Math.random() * 10);
//   arr = arr.concat(randomNumber);
// }
// console.log(arr);

// 14. Develop a small script which generate array of 5 random numbers
// and the numbers must be unique
// let newArray = [];
// for (let i = 0; i < 5; i++) {
//   const newRandomNum = Math.floor(Math.random() * 2);
//   newArray = newArray.concat(newRandomNum);
// }
// console.log(newArray);

// 15. Develop a small script which generate a six characters random id

// let string = Math.random().toString(36).substring(2, 8);
// console.log(string);

//Exercise Level 2

// 1. Develop a small script which generate any number of characters random id

// let stringID = Math.random().toString(36).substring(2);
// console.log(stringID);

// 2. Write a script which generates a random hexadecimal number.

// let hexNum = "#";
// let ranStringAndNum = Math.random().toString(16).substring(2, 8);
// hexNum += ranStringAndNum;
// console.log(hexNum);

// 3. Write a script which generates a random rgb color number.

// let rgb = "";
// for (let i = 0; i < 3; i++) {
//   let rgbRandom = Math.floor(Math.random() * 256);
//   if (i < 2) {
//     rgb += rgbRandom + ", ";
//   } else {
//     rgb += rgbRandom;
//   }
// }
// console.log(rgb);

// 4. Using the countries array, create the following new array.
/*
  ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", 
  "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/

// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];
// const upperCase = countries.map((element) => {
//   return element.toUpperCase();
// });
// console.log(upperCase);

// wHaT arE YoU DoINg?
// let string = "wHaT arE YoU DoINg?";
// let newUpper = string[0].toUpperCase();
// let newLower = string.substring(1).toLowerCase();
// let newString = newUpper + newLower;
// console.log(newString);

// 5. Using the above countries array, create an array for countries length'

// const countriesLength = [];
// countries.forEach((str) => {
//   countriesLength.push(str.length);
// });
// console.log(countriesLength);

/* 6. Use the countries array to create the following array of arrays:

[
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
// const newCountriesArray = [];
// countries.forEach((str) => {
//   newCountriesArray.push([str, str.substring(0, 3).toUpperCase(), str.length]);
// });
// newCountriesArray.splice(9, 0, ["Iceland", "ICE", 7]);

// console.log(newCountriesArray);

/* 7. In above countries array, check if there is a country or countries containing
 the word 'land'. If there are countries containing 'land', print it as array. 
 If there is no country containing the word 'land', print 'All these countries 
 are without land'.
*/
// const landArray = [];
// newCountriesArray.forEach((str) => {
//   if (str[0].includes("land")) {
//     landArray.push(str[0]);
//   }
// });
// console.log(landArray);

/* 8. In above countries array, check if there is  a country or countries end with 
a substring 'ia'. If there are countries end with, print it as array. If there is no 
country containing the word 'ai', print 'These are countries ends without ia'.
*/
// const iaArray = [];
// newCountriesArray.forEach((str) => {
//   if (str[0].includes("ia")) {
//     iaArray.push(str[0]);
//   }
// });
// console.log(iaArray);

/* 9. Using the above countries array, find the country containing the biggest number of characters.
 */
// let longestCountry = "";

// newCountriesArray.forEach((country) => {
//   if (country[0].length > longestCountry.length) {
//     longestCountry = country[0];
//   }
// });

// console.log(longestCountry);

/* 10. Using the above countries array, find the country containing only 5 characters. */
// let fiveChar = [];
// newCountriesArray.forEach((country) => {
//   if (country[0].length < 6) {
//     fiveChar.push(country[0]);
//   }
// });

// console.log(fiveChar);

/* 11. Find the longest word in the webTechs array*/
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// let longestTech = "";
// webTechs.forEach((language) => {
//   if (language.length > longestTech.length) {
//     longestTech = language;
//   }
// });
// console.log(longestTech);

/* 12. Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3], ["JavaScript", 10], ["React", 5],
["Redux", 5], ["Node", 4], ["MongoDB", 7]] */
// let newWebTechs = [];
// webTechs.map((language) => {
//   newWebTechs.push([language, language.length]);
// });
// console.log(newWebTechs);

/* 13. An application created using MongoDB, Express, React and Node 
is called a MERN stack app. Create the acronym MERN by using the 
array mernStack */
// const mernStack = ["MongoDB", "Express", "React", "Node"];
// let acronym = "";
// mernStack.forEach((name) => {
//   acronym = acronym.concat(name[0]);
// });
// console.log(acronym);

/* 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux",
 "Node", "Express", "MongoDB"] using a for loop or for of loop and print 
out the items. */

// for (let i = 0; i < webTechs.length; i++) {
//   console.log(webTechs[i]);
// }

/* 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse
 the order using loop without using a reverse method. */
// const fruitArray = ["banana", "orange", "mango", "lemon"];
// let newFruitArr = [];
// for (let i = 3; i >= 0; i--) {
//   newFruitArr.push(fruitArray[i]);
// }
// console.log(newFruitArr);

/* 16. Print all the elements of array as shown below. 
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/
// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// fullStack.forEach((halfStack) => {
//   halfStack.forEach((stack) => {
//     console.log(stack);
//   });
// });

// Exercises: Level 3

// 1. Copy countries array(Avoid mutation)

// const countriesNew = Array.from(countries);
// console.log(countriesNew);

/* 2. Arrays are mutable. Create a copy of array which does not 
  modify the original. Sort the copied array and store in a 
  variable sortedCountries */
// let arrCountries = [];
// countries.forEach((element) => {
//   arrCountries.push(element);
// });
// console.log(arrCountries);
// const sortedCountries = arrCountries.sort();
// console.log(sortedCountries);

/* 3. Sort the webTechs array and mernStack array */
// const sortedWebTechs = [];
// webTechs.forEach((element) => {
//   sortedWebTechs.push(element);
// });
// sortedWebTechs.sort();
// console.log(sortedWebTechs);

// const sortMernStack = [];
// mernStack.forEach((element) => {
//   sortMernStack.push(element);
// });
// sortMernStack.sort();
// console.log(sortMernStack);

/* 4. Extract all the countries contain the word 'land' from the 
[countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
 and print it as array */

import { countries } from "../Day 5/countries.js";

const countriesLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land") === true) {
    countriesLand.push(countries[i]);
  }
}
console.log(countriesLand);

/* 5. Find the country containing the hightest number of 
characters in the [countries array] */
let longestCountry = "";
countries.forEach((element) => {
  if (element.length > longestCountry.length) {
    longestCountry = element;
  }
});
console.log(longestCountry);

/* 6. Extract all the countries containing only four characters
 from the [countries array] and print it as array */
const country4Char = [];
countries.forEach((element) => {
  if (element.length === 4) {
    country4Char.push(element);
  }
});
console.log(country4Char);

/* 7. Extract all the countries containing two or more words 
from the [countries array] and print it as array */
const twoOrMoreWords = [];
countries.forEach((element) => {
  if (element.includes(" ") === true) {
    twoOrMoreWords.push(element);
  }
});
console.log(twoOrMoreWords);

/* 8. Reverse the [countries array] and capitalize each country
  and store it as an array */
const reverseCountries = [];
countries.reverse().forEach((country) => {
  const capitalized = country[0].toUpperCase() + country.slice(1);
  reverseCountries.push(capitalized);
});

console.log(reverseCountries);

// Get 6 random numbers without repeat
let randLuck = [];
for (let i = 0; i < 6; i++) {
  // let runRandom = Math.floor(Math.random() * 49) + 1; // +1 so that there won't be a 0(zero), we only want 1 to 49
  // if (randLuck.indexOf(runRandom) < 0) { //checks if array has the number by its index, if it returns -1 that means it is not in the array
  //   randLuck.push(runRandom); // if no repeat >> push into array
  // } else {
  //   i--; // if repeat >> run loop 1 more time
  // }

  let runRandom = Math.floor(Math.random() * 49) + 1;
  if (randLuck.includes(runRandom) !== true) {
    randLuck.push(runRandom);
  } else {
    i--;
  }
}
console.log(randLuck);
