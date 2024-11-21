// create a for loop that starts from 1 and edns at 8 only with empty body.
for (let i = 1; i <= 8; i++) {
  console.log(i);
}

console.log("----------------------------------");

// Create an array of string and add 7 student names (first and last names both) to it.
let students = [
  "John Smith",
  "Jane Doe",
  "Michael Johnson",
  "Sarah Williams",
  "David Brown",
  "Emily Davis",
  "Michael Wilson",
];

// display all students names on console by using for of loop.
for (let student of students) {
  console.log(student);
}

console.log("----------------------------------------------------------------");

console.log(students);

// set the first student name to "Abdiwali Mohamed" and last student name to "Furkan Aktas".
students[0] = "Abdiwali Mohamed";
students[students.length - 1] = "Furkan Aktas";

console.log(students);

console.log("----------------------------------------------------------------");

// display all student names in reversed order.
for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

console.log("----------------------------------------------------------------");

let email = "cydeo_school@yahoo.com";

// check if the email address contains '@gmail.com'.
if (email.includes("@gmail.com")) {
  console.log("Email address is valid.");
} else {
  console.log("Email address is not valid.");
}

// use string manipulation to retrive the domain of the email.
let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log("Email domain is:", domain);

console.log("----------------------------------------------------------------");

// create a function that can verify if a string is palindrome.
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

let str = "madam";

console.log(isPalindrome(str)? "The string is a palindrome." : "The string is not a palindrome.");

console.log("----------------------------------------------------------------");

let numbers = [100, 200, 300, 400, 5, 6, 7, 8, 9, 0, 11, 10];

// Write a program that can display the maximum and minimum numbers from the numbers array. DO NOT use any build in sort functions.
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }

  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Maximum number:", max);
console.log("Minimum number:", min);


console.log("----------------------------------------------------------------");

let nums = [5, 3, 8, 2, 1, 7, 4, 6, 0, 9];

// Write a program that can sort the nums array in ascending order. DO NOT use any build in sort functions.
for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

console.log("Sorted nums array:", nums);

console.log("----------------------------------------------------------------");

// create an array of numbers that constains multiple duplicated numbers.
let duplicates = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 9];

// write a program that can remove all the duplicated elements from the duplicates array.
let uniqueNumbers = [];

for (let i = 0; i < duplicates.length; i++) {
  if (!uniqueNumbers.includes(duplicates[i])) {
    uniqueNumbers.push(duplicates[i]);
  }
}

console.log("Unique numbers array:", uniqueNumbers);

console.log("----------------------------------------------------------------");

/*
Create a class named Item with the following requirments:
  Attributes:
    itemName, price, quantity

  Methods:
    constructor: initialize all the fields.
    calculateTotalPrice: returns the total price of the item (price * quantity).
*/


/**
 * Represents an item with a name, price, and quantity.
 *
 * @class Item
 * @constructor
 * @param {string} itemName - The name of the item.
 * @param {number} price - The price of the item.
 * @param {number} quantity - The quantity of the item.
 */
class Item {

  constructor(itemName, price, quantity) {
    this.itemName = itemName;
    this.price = price;
    this.quantity = quantity;
  }

  /**
   * Calculates the total price of the item by multiplying the price by the quantity.
   *
   * @method calculateTotalPrice
   * @returns {number} The total price of the item.
   */
  calculateTotalPrice() {
    return this.price * this.quantity;
  }
  
}

let item1 = new Item("Shirt", 20, 5);
console.log(item1);
console.log("Total price for item1:", item1.calculateTotalPrice());

let item2 = new Item("Pants", 30, 3);
console.log(item2);
console.log("Total price for item2:", item2.calculateTotalPrice());



