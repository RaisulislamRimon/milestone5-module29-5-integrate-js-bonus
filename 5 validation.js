const firstNumber = "23";
const secondNumber = 23;
// string, number, boolean
if (typeof firstNumber === "number") {
  console.log("value is a number");
} else {
  console.log("value is not a number");
}

if (typeof secondNumber === "number") {
  console.log("value is a number");
} else {
  console.log("value is not a number");
}

const numbers = [3, 12, 78, 90];
const student = { name: "Rongila Rafsan", job: "khawadawa kora" };
console.log(Array.isArray(numbers));
console.log(Array.isArray(secondNumber));
console.log(typeof student);
