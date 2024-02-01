// Level 1

/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. 
Try to implement it in two ways:
  using if else
  ternary operator. */
let a = 20;
let b = 15;

a > b ? console.log("a is greater than b.") : console.log("a is less than b.");

/* Even numbers are divisible by 2 and the remainder is zero. How do you check, 
if a number is even or not using JavaScript? */

// let number = prompt("Enter a number: ");

// if (number % 2 === 0) {
//   alert("The number is even.");
// } else {
//   alert("The number is odd.");
// }

// Level 2

/* 1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

// let grade = prompt("What's your score?");
if (grade >= 0 && grade <= 49) {
  console.log("You scored an F.");
} else if (grade >= 50 && grade <= 59) {
  console.log("You scored a D.");
} else if (grade >= 60 && grade <= 69) {
  console.log("You scored a C.");
} else if (grade >= 70 && grade <= 89) {
  console.log("You scored a B.");
} else if (grade >= 90 && grade <= 100) {
  console.log("You scored an A.");
} else {
  console.log("Give me the valid score range.");
}
