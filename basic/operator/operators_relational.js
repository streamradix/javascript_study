// 관계 연산자

const LINE_BREAK = "";

console.log("===== Less than : <");
console.log(5 < 3); // false
console.log(3 < 3); // false
console.log(3n < 5); // true: Compare bigint to number (note: bigint is not supported in all browsers)
console.log("aa" < "ab"); // true: Compare String

console.log(LINE_BREAK);
console.log("===== Less than or equal : <=");
console.log(5 <= 3); // false
console.log(3 <= 3); // true
console.log(3n <= 5); // true: Compare bigint to number (note: bigint is not supported in all browsers)
console.log("aa" <= "ab"); // true: Compare String

console.log(LINE_BREAK);
console.log("===== Greater than : >");
console.log(5 > 3); // true
console.log(3 > 3); // false
console.log(3n > 5); // false: Compare bigint to number (note: bigint is not supported in all browsers)
console.log("ab" > "aa"); // true: Compare String

console.log(LINE_BREAK);
console.log("===== Greater than or equal : >=");
console.log(5 >= 3); // true
console.log(3 >= 3); // true
console.log(3n >= 5); // false: Compare bigint to number (note: bigint is not supported in all browsers)
console.log("ab" >= "aa"); // true: Compare String
