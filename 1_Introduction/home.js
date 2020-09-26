// console.log("Hello");

// // alert("yooo");

// // How you write an comment inline

// // Variables
// let b = "smoothie";
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

// let age = prompt("What is your age?");

// document.getElementById("someText").innerHTML = age;

// // Numbers in javascript
// let num1 = 10;

// // Increment by 1
// num1++;

// // Decrement by 1
// num1--;

// // Divide, multiple, remainder
// console.log(num1 % 6);

// // Increment / decrement by 10
// num1 += 10;
// console.log(num1);

// // Functions
// /**
//  * 1. Create the function
//  * 2. Call the function
//  */

// // Create function
// function fun() {
//   console.log("This is a function");
// }

// // Call the function
// fun();

/**
 * Lets create a function that takes in a name
 * and says hello followed by your name
 */

// function greeting(yourName) {
//   let result = "Hello " + yourName; // String concatenation
//   console.log(result);
// }

// let name = prompt("What is your name? ");
// greeting(name);

// // How do arguments work in functions?
// // How do we add two numbers together in a function?

// function sumNumbers(num1, num2) {
//   let result = num1 + num2;
//   console.log(result);
// }

// sumNumbers(10, 10);

// Data types
// let yourAge = 18; // Number
// let yourName = "Bryan"; // String
// let name = { first: "Bryan", last: "Doe" }; // Object
// let truth = false; // Boolean
// let groceries = ["apple", "banana", "oranges"]; // Array
// let random; // Undefined
// let nothing = null; // Value null

// Strings in javascript (common methods)
// let fruit = "banana,apple,orange,blackberry";
// let moreFruits = "banana\napple";
// console.log(moreFruits);

// console.log(fruit.length); // Length

// console.log(fruit.indexOf("nan")); // Find something in a string

// console.log(fruit.slice(2, 6)); // Slice from index x -> y (Up to y, not including)

// console.log(fruit.replace("ban", "123")); // Find x, replace with y

// console.log(fruit.toUpperCase()); // Makes all elements upper case
// console.log(fruit.toLowerCase()); // Makes all elements lower case
// console.log(fruit.charAt());
// console.log(fruit[2]); // Same as the above
// console.log(fruit.split(",")); // Splits by comma
// console.log(fruit.split("")); // Split by character

// let fruits = ["banana", "apple", "orange", "pineapple"];

// fruits = new Array("banana", "apple", "orange", "pineapple");

// console.log(fruits[2]);

// fruits[0] = "pear";
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // Array common methods
// console.log("To string", fruits.toString());

// console.log(fruits.join(" - ")); // Joins array using whatever is specified
// console.log(fruits.join(" * ")); // Joins array using whatever is specified
// console.log(fruits.pop(), fruits); // Removes last item from array
// console.log(fruits.push("blackberries"), fruits); // Appends item onto end of array
// console.log(fruits[4]);
// fruits[fruits.length] = "new fruit";
// console.log(fruits);
// fruits.shift(); // Remove first element from a array
// console.log(fruits);
// fruits.unshift("kiwi"); // Add a new element to array
// console.log(fruits);

// let vegetables = ["asparagus", "tomato", "broccoli"];
// let allGroceries = fruits.concat(vegetables); // Combines arrays
// console.log(allGroceries);

// console.log(allGroceries.slice(1, 4)); // Slices the array from x -> y
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());

// let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// console.log(
//   someNumbers.sort(function (a, b) {
//     return a - b;
//   })
// );

// console.log(
//   someNumbers.sort(function (a, b) {
//     return b - a;
//   })
// );

// let emptyArray = new Array();
// for (let num = 0; num <= 10; num++) {
//   emptyArray.push(num); // Pushes each number into the array
// }

// console.log(emptyArray);

// Objects in Javascript
// Dictionaries in Python

// let student = {
//   first: "Bryan",
//   last: "Farrill",
//   age: 25,
//   height: 200,
//   studentInfo: function () {
//     return this.first + "\n" + this.last + "\n" + this.age;
//   },
// };

// // console.log(student.first);
// // console.log(student["last"]);
// // student.first = "not Bryan";
// // student["first"] = "Yes Bryan";
// // console.log(student.first);

// student.age++;
// console.log(student.age);

// console.log(student.studentInfo());


