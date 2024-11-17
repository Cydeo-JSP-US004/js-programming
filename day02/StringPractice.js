let schoolName = "CYDEO School";

console.log(typeof schoolName);
console.log(schoolName.length);

console.log(schoolName.charAt(0));
console.log(schoolName.charAt(schoolName.length - 1));

console.log(schoolName[0]);
console.log(schoolName[schoolName.length - 1]);

//let xpath = '//button[@id = \'abc\']'
//let  xpath = "//button[@id = 'abc']";
//button[@id = 'abc']

console.log("---------------------------------");

let program = "javascript";

program = program.toUpperCase(); // "JAVASCRIPT"

console.log(program);

console.log("---------------------------------");

let word1 = "Python ProGRAMMING";
let word2 = "pYTHON programming";

console.log(word1 === word2);
console.log(word1.toLowerCase() === word2.toLowerCase());
//             "javascript"    ===    "javascipt"

console.log("---------------------------------");

let s = "ABCDEFGHIJKL";

console.log(s.includes("CDE"));

console.log("---------------------------------");

let x = "Python Python Python";

//x = x.replace("Python", "JavaScript");

//x = x.replaceAll("Python", "JavaScript");

x = x.replace(new RegExp("Python", "g"), "JavaScript");

console.log(x);

console.log("---------------------------------");

let email = "cydeoschool@hotmail.com";

let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log(domain);

console.log("---------------------------------");

let course = "Playwright";

for (let i = 0; i < course.length; i++) {
  console.log(course[i]);
}

console.log("---------------------------------");

let employeeName = "Anam";
let employeeAge = 28;

console.log(
  "Employee name is " +
    employeeName +
    ", and employee's age is " +
    employeeAge +
    " years old."
);

console.log(
  `Employee name is ${employeeName}, and ${employeeName}'s age is ${employeeAge} years old.`
);

let title = "Google";

console.log(`Title of the page is ${title}`);
