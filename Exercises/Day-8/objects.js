// Exercise Level 1

/* 
1. Create an empty object called dog
2. Print the the dog object on the console
3. Add name, legs, color, age and bark properties for the dog 
object. The bark property is a method which return _woof woof_
4. Get name, legs, color, age and bark value from the dog object
5. Set new properties the dog object: breed, getDogInfo */
const dog = {
  name: "Goofy",
  legs: 4,
  color: "light gold",
  age: 8,
  bark: function () {
    return "woof woof";
  },
};
// console.log(dog);
// console.log(dog.bark());

dog.breed = "golden retreiver";
dog.getDogInfo = function () {
  let statement = `${this.name} is a ${this.breed}. He is\
 ${this.age} years old and is ${this.color} in color. He's\
 got ${this.legs} legs and a bushy tail.`;
  return statement;
};

// console.log(dog.getDogInfo());
// console.log(dog);

// Exercise: Level 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
// 1. Find the person who has many skills in the users object.
let userWithMostSkills;

Object.values(users).forEach((user) => {
  if (
    !userWithMostSkills ||
    user.skills.length > userWithMostSkills.skills.length
  ) {
    userWithMostSkills = user;
  }
});

// console.log(
//   Object.keys(users).find((key) => users[key] === userWithMostSkills)
// );

/* 
2. Count logged in users, count users having greater than 
equal to 50 points from the following object. 
*/
