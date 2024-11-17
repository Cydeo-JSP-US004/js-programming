function greetings(){
    console.log("Hello Programmers!");
    console.log("Hello CYDEO!");
}


greetings();
greetings();
greetings();

console.log("-----------------------------");

function displayValue(data = "Unknown"){
    console.log(`The value is ${data}`);
}

displayValue(10000);

displayValue("JavaScript");

displayValue(true);

displayValue();

console.log("-----------------------------");

function square(number = 0){
    let result = number * number; // undifned * undifiend ===> NaN
    return result;
}


let result = square(3);

console.log(result);


result = square();

console.log(result);

