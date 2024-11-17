let elements = ["Java", "JavaScript", "Python", 10, 20, 30, 40, true, false];

console.log(elements);

console.log("-------------------------------------------");

let students = ["Irina", "Maryam", "Daniela", "Andrei"];

console.log(students);
console.log(students.length);

students.push("Anam");
students.push("Suleyman");

console.log(students);

students[students.length-3] = "Josh";

console.log(students);

students.unshift("Ahmed");
students.unshift("Ahmed");
students.unshift("Ahmed");

console.log(students);

students.splice(1, 2);

console.log(students);

students.shift();

console.log(students);

students.pop();

console.log(students);