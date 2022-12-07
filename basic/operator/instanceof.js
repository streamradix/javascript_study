// 데이터 type 상속 판별

console.log("===== instanceof");

function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car); // true
console.log(auto instanceof Object); // true
