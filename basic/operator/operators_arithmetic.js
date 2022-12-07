// 산술 연산자

const LINE_BREAK = "";

console.log("===== Addition : +");
console.log(2 + 2); // 4
console.log(2 + 1.5); //3.5
console.log(2 + true); // 3
console.log(2 + false); // 2
console.log("hello " + "everyone"); // hello everyone
console.log(2001 + ": A Space Odyssey"); // 2001: A Space Odyssey

console.log(LINE_BREAK);
console.log("===== Subtraction : -");
console.log(5 - 3); // 2
console.log(3.5 - 5); // -1.5
console.log(5 - true); // 4
console.log(5 - false); // 5
console.log(5 - "hello"); // NaN

console.log(LINE_BREAK);
console.log("===== Multiplication : *");
console.log(3 * 4); // 12
console.log(-3 * 4); // -12
console.log("3" * 2); // 6
console.log("foo" * 2); // NaN

console.log(LINE_BREAK);
console.log("===== Exponentiation : ** = Math.pow()");
console.log(3 ** 4); // 81
console.log(10 ** -2); // 0.01
console.log(2 ** (3 ** 2)); // 512
console.log((2 ** 3) ** 2); // 64

console.log(LINE_BREAK);
console.log("===== Division : /");
console.log(12 / 2); //6
console.log(3 / 2); // 1.5
console.log(6 / "3"); // 2
console.log(2 / 0); // Infinity

console.log(LINE_BREAK);
console.log("===== Remainder : %");
console.log(13 % 5); // 3
console.log(-13 % 5); // -3
console.log(4 % 2); // 0
console.log(-4 % 2); // -0