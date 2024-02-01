console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' 
  by John Holmes teaches us to help one another.`
);
console.log(
  `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the 
  same -- with charity you give love, so don't just give money but reach out your hand instead.`
);

console.log(typeof 10);
console.log(parseFloat("9.8"));
let string1 = "python";
let string2 = "jargon";
console.log(string1.search("on"));
console.log(string2.search("on"));

let randomNum = Math.floor(Math.random() * 101); // between 0 and 100
console.log(randomNum);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 8. Generate a random number between 50 and 100 inclusively.
console.log(getRandomInt(50, 100));
// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));

// 10. Access the 'JavaScript' string characters using a random number.
let string = "JavaScript";
let randomNumLength = Math.floor(Math.random() * string.length);
console.log(string.charAt(randomNumLength));

// 11. Use console.log() and escape characters to print the following pattern.
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

// 12. Use substr to slice out the phrase because because because from the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
let phrase =
  "You cannot end a sentence with because because because is a conjunction";
console.log(phrase.indexOf("because"));
console.log(phrase.lastIndexOf("e"));
console.log(phrase.substring(0, 31) + phrase.substring(55));
