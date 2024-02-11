// 1. Declare an empty array
const empty = new Array();
console.log(empty);
const sixEmpty = Array(6).fill("P");
console.log(sixEmpty);

// 2. Declare an array with more than 5 number of elements
const moreThanFive = Array(
  "onetoomany",
  2,
  true,
  ["hello", "world"],
  "poll",
  "palworld",
  false
);
console.log(moreThanFive);

// 3. Find the length of your array
console.log(moreThanFive.length);

// 4. Get the first item, the middle item and the last item of the array
const firstItem = moreThanFive[0];
console.log(firstItem);
const lastItem = moreThanFive[moreThanFive.length - 1];
console.log(lastItem);
const middleItem = moreThanFive[Math.floor((moreThanFive.length - 1) / 2)];
console.log(middleItem);

// 6. Declare an array variable name itCompanies and assign initial values Facebook,
// Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompany = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "and Amazon",
];
// 7. Print the array using console.log()
console.log(itCompany);
// 9. Print the first company, middle and last company
const firstCompany = itCompany[0];
const lastCompany = itCompany[itCompany.length - 1];
const middleCompany = itCompany[Math.floor((itCompany.length - 1) / 2)];
console.log(firstCompany, middleCompany, lastCompany);
// 10. Print out each company
// let result;
// function eachElement() {
//   for (i = 0; i < itCompany.length; i++) {
//     result = i + 1 + ". " + itCompany[i];
//     console.log(result);
//   }
// }
// eachElement();

// itCompany.forEach(function eachItem(x) {
//   console.log(x);
// });

// 11. Change each company name to uppercase one by one and print them out
const upper = itCompany.map((element) => {
  return element.toUpperCase();
});
console.log(upper);

/* 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, 
IBM, Oracle and Amazon are big IT companies. */
const itSentence = itCompany.toString();
const newSentence = itSentence.split(",").join(", ");
console.log(newSentence);

/* 13. Check if a certain company exists in the itCompanies array. If it exist 
return the company else return a company is not found */
// const checkCompany = itCompany.includes("IBM");
// if (checkCompany) {
//   console.log("IBM");
// } else {
//   console.log("Compnay not found.");
// }

/* 14. Filter out companies which have more than one 'o' without the filter method */
// const filterO = itCompany.includes("o");
// console.log(filterO);                      // unfinished

/* 15. Sort the array using _sort()_ method */
// console.log(itCompany.sort());

/* 16. Reverse the array using _reverse()_ method */
// console.log(itCompany.reverse());

/* 17. Slice out the first 3 companies from the array */
console.log(itCompany.slice(0, 3));
// 18. Slice out the last 3 companies from the array
console.log(itCompany.slice(-3));
//19. Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompany.length / 2);
console.log(itCompany.slice(middleIndex, 4));

// 20. Remove the first IT company from the array
// itCompany.shift();
// console.log(itCompany);

//21. Remove the middle IT company or companies from the array
// itCompany.splice(3, 1);
// console.log(itCompany);

//22. Remove the last IT company from the array
// itCompany.pop();
// console.log(itCompany);

//23. Remove all IT companies
itCompany.splice(0); // can use itCompany.length = 0;
console.log(itCompany);

// ### Exercise: Level 2

/* 2. First remove all the punctuations and change the string 
to array and count the number of words in the array */
let text = `I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.`;
let words = text.replace(/[^a-zA-Z ]/g, "").split(" ");
console.log(words);
console.log(words.length);

/* 3. In the following shopping cart add, remove, edit items
```js
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
```
- add 'Meat' in the beginning of your shopping cart if it has not been already added
- add Sugar at the end of you shopping cart if it has not been already added
- remove 'Honey' if you are allergic to honey
- modify Tea to 'Green Tea' */

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

/* 5. Concatenate the following two variables and store it in a 
fullStack variable.*/

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// ### Exercise: Level 3

// 1. The following is an array of 10 students ages:
/* 
  - Sort the array and find the min and max age
  - Find the median age(one middle item or two middle items divided by two)
  - Find the average age(all items divided by number of items)
  - Find the range of the ages(max minus min)
  - Compare the value of (min - average) and (max - average), use _abs()_ method
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const minMax = ages.sort(); // 19 and 26
console.log(minMax);
//Median Age
const medianAge = ages.slice(4, 6);
console.log(medianAge);
//Average Age
let total = 0;
for (let i = 0; i < ages.length; i++) {
  total += ages[i];
}
const avgAge = total / ages.length; // 228 / 10
console.log(avgAge); // 22.8
//Range of the ages
const range = ages[ages.length - 1] - ages[0];
console.log(range);
//Compare the value
const value1 = Math.abs(ages[0] - avgAge);
const value2 = Math.abs(ages[ages.length - 1] - avgAge);
console.log(value1, value2);

/* 2. Slice the first ten countries from the [countries array]
(https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) */
import { countries } from "./countries.js";

console.log(countries.slice(0, 10));
// 3. Find the middle country(ies) in the [countries array]
const middleCountry = countries[Math.floor((countries.length - 1) / 2)];
console.log(countries.length);
console.log(middleCountry);

/* 4. Divide the countries array into two equal arrays if it is even.  
If countries array is not even , one more country for the first half.*/
const firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
const secondHalf = countries.slice(
  Math.ceil(countries.length / 2),
  countries.length
);
console.log(firstHalf, secondHalf);
