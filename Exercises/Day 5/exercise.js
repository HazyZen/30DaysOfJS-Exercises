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
const checkCompany = itCompany.includes("IBM");
if (checkCompany) {
  console.log("IBM");
} else {
  console.log("Compnay not found.");
}
