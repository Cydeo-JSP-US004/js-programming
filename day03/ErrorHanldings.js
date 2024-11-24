console.log("Test Started");

try{
    console.log(number);
}catch(e){
    console.log("An error occured while printing the number ");
}finally{
    console.log("This code will always execute");
}


console.log("Test Completed");

console.log("----------------------------------------------------------------");

let browser = "internet explorer";

if(browser === 'chrome' || browser === 'firefox' || browser === 'safari'){
    console.log("This browser is supported");
}else{
    console.log(`Unsopported browser type: ${browser}`);
    throw new Error();
}


console.log(`Execute the tests cases on ${browser} browser`);