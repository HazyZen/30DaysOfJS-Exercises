/* 1. Declare firstName, lastName, country, city, age, isMarried, year variable and 
assign value to it and use the typeof operator to check different data types. */
let furstName = "Furst";
console.log(typeof furstName);

/* 2. Check if type of '10' is equal to 10 */
console.log(typeof "10" == typeof 10);

/* 7. Use the Date object to do the following activities 
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.*/
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const dayToday = now.getDay(); // 4 = Thursday
const hrNow = now.getHours();
const minNow = now.getMinutes();
const timeSince = now.getTime();
console.log(timeSince);

// Level 2

/* 1. Write a script that prompt the user to enter base and height of the 
triangle and calculate an area of a triangle (area = 0.5 x b x h).*/
// alert("Calculate the area of the triangle");
// let base = prompt("Enter base:", "Input value");
// let height = prompt("Enter height:", "Input vale");
// const area = alert("The area of the triangle is " + base * height * 0.5);

/* 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)*/

const slope = (x1, y1, x2, y2) => {
  return (m = (y2 - y1) / (x2 - x1));
};

console.log(slope(2, 2, 6, 10));

/* 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out 
at what x value y is 0. */
const value = Math.pow(-3, 2) + 6 * -3 + 9;

console.log(value);

// 10.If the length of your name is greater than 7 say, your name is long else say your name is short.
/* 11. Compare your first name length and your family name length and you should get this output.*/

let firstName = "Asabeneh";
let lastName = "Yetayeh";

firstName.length > 7
  ? console.log("Your name is long.")
  : console.log("Your name is short.");

lastName.length > 7
  ? console.log("Your name is long.")
  : console.log("Your name is short.");

firstName.length > lastName.length
  ? console.log(
      "Your first name, Asabeneh is longer than your family name, Yetayeh."
    )
  : console.log(
      "Your last name, Yetayeh is longer than your first name, Asabeneh."
    );

/* 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to 
drive if not tell the user to wait a certain amount of years. */
// const current = new Date();
// const currentYear = current.getFullYear();
// const birthYear = prompt("Enter your birth year:");

// const drive = () => {
//   if (currentYear - birthYear >= 18) {
//     alert(
//       "You are " + (currentYear - birthYear) + " years old. You can drive."
//     );
//   } else {
//     alert("Wait " + (18 - (currentYear - birthYear)) + " year(s) to drive.");
//   }
// };

// drive();

// 14. Write a script that prompt the user to enter number of years. Calculate the number of
// seconds a person can live. Assume some one lives just hundred years.
// const calendar = new Date();
// const calendarYear = calendar.getFullYear();
// const yearsLived = prompt("Enter you year of birth: ");

// const yearDiff = calendarYear - yearsLived;
// const secondsLived = yearDiff * 86400;

// console.log(secondsLived);

/* 15. Create a human readable time format using the Date time object

i. YYYY-MM-DD HH:mm
ii. DD-MM-YYYY HH:mm
iii. DD/MM/YYYY HH:mm

*/
const i = `${year}-${month}-${date} ${hrNow}:${minNow}`;
console.log(i);

//Level 3
/* Create a human readable time format using the Date time object. The hour and the 
minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */
const date2 = new Date().toISOString().substring(0, 16).replace("T", " ");
console.log(date2);
