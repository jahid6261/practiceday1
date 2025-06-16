
// problem number 2
let number = 5;
if (number % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}


// problem 3 

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}




//problem 4

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}


// problem 5
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}

// problem 6 
let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let unique = [];

for (let num of numbers) {
  if (!unique.includes(num)) {
    unique.push(num);
  }
}
console.log("Unique numbers:", unique);

// problem 7
let arr = [1, 4, 7, 10, 13, 16, 20];
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);


// problem 8
let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let longNames = friends.filter(name => name.length > 4);
console.log("Names longer than 4 characters:", longNames);
