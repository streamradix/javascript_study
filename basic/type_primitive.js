/* 원시 자료형 primitive type
	- 객체가 아닌 자료형: 하나의 값만 담을 수 있다
	- 메서드를 가지지 않는다
*/

// string: 문자열 - 텍스트 데이터
const userName = "Alberto";
console.log(userName);

// number: 숫자 - 정수만을 표현하는 type 이 자바스크립트에는 없다
const age = 35;
console.log(age);

// boolean: 불리언 - true, false 를 나타내는데 사용
const isMale = true;
const married = false;

console.log(`${userName} is ${age} old. ${isMale ? "He" : "She"} is ${married ? "married" : "not married"}`);

// null: 값이 없음
// undefined: 정의되지 않음
// symbol: 심벌, ES6 추가 - 고유하고 변경할 수 없는 값
