for (let i = 0; i < 5; i++) {
  console.log("Hello");
}

console.log("----------------------------------------------------------------");

for (let index = 0; index < 10; index++) {
  console.log(index);
}

console.log("----------------------------------------------------------------");

for (let i = 1; i < 8; i++) {
  console.log(i); // 1 2 3 4
  if (i == 4) {
    break; // terminates the loop
  }
}

console.log("----------------------------------------------------------------");

for (let i = 1; i < 8; i++) {
  if (i == 2 || i == 6) {
    continue; // jumps to next iteration (skips the current iteration)
  }
  console.log(i);
}

console.log("----------------------------------------------------------------");

while (false) {
  console.log("Hello");
}

console.log("----------------------------------------------------------------");

do {
  console.log("Hello");
} while (false);
