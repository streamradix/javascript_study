const LINE_BREAK = "";

console.log("===== Equality : ==");
console.log(1 == 1); // true
console.log("hello" == "hello"); // true
console.log("1" == 1); // true
console.log(0 == false); // true

console.log(LINE_BREAK);
console.log("===== Inequality : !=");
console.log(1 != 1); // false
console.log("hello" != "hello"); // false
console.log("1" != 1); // false
console.log(0 != false); // false

console.log(LINE_BREAK);
console.log("===== Strict equality : ===");
console.log(1 === 1); // true
console.log("hello" === "hello"); // true
console.log("1" === 1); // false
console.log(0 === false); // false

console.log(LINE_BREAK);
console.log("===== Strict inequality : !==");
console.log(1 !== 1); // false
console.log("hello" !== "hello"); // false
console.log("1" !== 1); // true
console.log(0 !== false); // true
