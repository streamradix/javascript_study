/* 객체 object
	- 여러 속성의 모음을 저장하는 데 사용
	- 키, 값 쌍을 저장
	- 키의 자료형은 string
	- 값은 모든 자료형이 될 수 있다 (함수도 가능)
*/

const car = {
	wheels: 4,
	color: "yellow",
	drive: function () {
		console.log("붕붕");
	}
};

const objectKey0 = Object.keys(car)[0];
console.log(objectKey0); // wheels
console.log(typeof objectKey0); // string
car.drive(); // 붕붕

/* 빈 객체 생성: 속성 선언할 필요가 없다 */
const none1 = new Object(); // 방법 1
const none2 = {}; // 방법 2: object literal (조금 더 일반적 방법)

/* 속성 추가 */
none1.color = "red";
console.log(none1.color); // red

/* 속성 접근 */
console.log(car.wheels); // 방법 1: 점 표기법
console.log(car["color"]); // 방법 2: 대괄호 표기법 bracket notation

// 여러 단어로 이루어진 속성일 경우 - 점 표기법 사용 불가능
none2["wheel color"] = "gray";
console.log(none2["wheel color"]);

/* 객체 복사 */
const firstCar = {
	color: "blue"
};
const secondCar = firstCar; // 얕은 복사 shallow copy: 참조 복사

// 참조만 복사하기 때문에 원본를 수정하면 복사본도 수정됨
firstCar.wheels = 4;
console.log(firstCar.wheels); // 4
console.log(secondCar.wheels); // 4
console.log(firstCar == secondCar); // true
console.log(firstCar === secondCar); // true

const thirdCar = Object.assign({}, firstCar); // 깊은 복사 deep copy: 내용 복사
firstCar.wheels = 6;
console.log(firstCar.wheels); // 6
console.log(thirdCar.wheels); // 4
console.log(firstCar == thirdCar); // false
console.log(firstCar === thirdCar); // false
