// variable 변수: 값을 담기 위한 공간

/* 변수 선언 */

// ES6 (ES2015) 이전 - 키워드 var
var fluitVar = "apple";

// ES6 (ES2015) 이후 - 키워드 const, let
let fruitLet = "orange";
const fruitConst = "lemon";

console.log(fluitVar, fruitLet, fruitConst);

/* 재할당 여부 */

// 재할당 가능 - var, let
fruitVar = "strawberry";
fruitLet = "watermelon";
console.log(fruitVar, fruitLet);

// 재할당 불가능 - const
fruitConst = "pear"; // Uncaught TypeError - const 선언 변수에 재할당 불가능
console.log(fruitConst);
