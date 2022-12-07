// The "in" operator returns "true" if the specified property is in the specified object or its prototype chain.

// 객체의 속성이 존재하는가 판별
// 속성 값이 존재하는가 판별 하는 것이 아님

const car = { make: "Honda", model: "Accord", year: 1998 };

console.log("make" in car); // true

delete car.make;

if ("make" in car === false) {
	car.make = "Suzuki";
}

console.log(car.make); // "Suzuki"
