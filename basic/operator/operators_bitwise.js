const LINE_BREAK = "";
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011
const c = -3;
const d = 2;
const e = -5; // 11111111111111111111111111111011

console.log("===== Bitwise AND : &");
console.log(a & b); // 00000000000000000000000000000001

console.log(LINE_BREAK);
console.log("===== Bitwise OR : |");
console.log(a | b); // 00000000000000000000000000000111

console.log(LINE_BREAK);
console.log("===== Bitwise XOR : ^");
console.log(a ^ b); // 00000000000000000000000000000110

console.log(LINE_BREAK);
console.log("===== Bitwise NOT : ~");
console.log(~a); // 11111111111111111111111111111010 = -6
console.log(~c); // 00000000000000000000000000000010 = 2

console.log(LINE_BREAK);
console.log("===== Bitwise Left shift : <<");
console.log(a << d); // 00000000000000000000000000010100 = 20

console.log(LINE_BREAK);
console.log("===== Bitwise Right shift : >>");
console.log(a >> d); // 00000000000000000000000000000001 = 1
console.log(e >> d); // 11111111111111111111111111111110 = -2

console.log(LINE_BREAK);
console.log("===== Bitwise Unsigned right shift : >>>");
console.log(a >>> d); //  00000000000000000000000000000001 = 1
console.log(e >>> d); //  00111111111111111111111111111110 = 1073741822
