function square(x = 0) {
  return x * x;
}

function cube(y = 0) {
  return y * y * y;
}

function calculate(num1 = 0, num2 = 0, operator = "+") {
  if (operator === "-") {
    return num1 - num2;
  } else if (operator === "+") {
    return num1 + num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    console.log("Invalid operator");
    return 0;
  }
}
