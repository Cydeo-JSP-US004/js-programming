
let schoolName = "CYDEO School";

console.log(typeof schoolName);
console.log(schoolName.length);

console.log(schoolName.charAt(0));
console.log(schoolName.charAt(schoolName.length -1 ));

console.log(schoolName[0]);
console.log(schoolName[schoolName.length -1]);

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

x= x.replace(new RegExp("Python", 'g'), "JavaScript");

console.log(x);


