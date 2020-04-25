// Concat()
// function ArrayPractice() {
// 	let Laptops = ["HP", "Dell", "MAC"];
// 	let Mobile = ["SAMSUNG", "IPHONE", "ONE PLUS"]
// 	let Gatgets = Laptops.concat(Mobile);
// 	document.getElementById("demo").innerHTML = Gatgets;
// }

// Result: "HP", "Dell", "MAC", "SAMSUNG", "IPHONE", "ONE PLUS"

// copyWithin()
// function ArrayPractice() {
// 	let Laptops = ["HP", "Dell", "MAC", "SAMSUNG", "IPHONE", "ONE PLUS"];
// 	let Gatgets = Laptops.copyWithin(3,0,3);
// 	document.getElementById("demo").innerHTML = Gatgets;
// }

// Result: HP,Dell,MAC,HP,Dell,MAC

// entries()
// function ArrayPractice() {
// 	let Laptops = ["HP", "Dell", "MAC", "SAMSUNG", "IPHONE", "ONE PLUS"];
// 	let f = Laptops.entries();

// 	for (x of f){
// 		document.getElementById("demo").innerHTML += x + "<br>";
// 	}
// }

/* Result:
0,HP
1,Dell
2,MAC
3,SAMSUNG
4,IPHONE
5,ONE PLUS */


// every()
// let ages = [10, 15, 20, 25, 30];

// function checkAdult() {
// 	return ages >= 18;
// }

// function ArrayPractice() {
// 	document.getElementById("demo").innerHTML = ages.every(checkAdult);
// }

// fill()
// function ArrayPractice() {
// 	let Laptops = ["HP", "Dell", "MAC"];
// 	document.getElementById("demo").innerHTML = Laptops.fill("HP ENVY");
// }

// // Result: HP ENVY,HP ENVY,HP ENVY 

// filter()
// let ages = [32, 16, 33, 38];

// function checkAdult(age) {
// return age >= 18
// }

// function ArrayPractice() {
// 	document.getElementById("demo").innerHTML = ages.filter(checkAdult);

// }

// // Result: 32,33,38


// find()
// let ages = [15, 19, 24, 26, 10];

// function checkAdult(age) {
// 	return age >= 18
// }

// function ArrayPractice() {
// 	document.getElementById("demo").innerHTML = ages.find(checkAdult);
// }

// // Result: 19, It only return first element which pass a test.


// findIndex()
// let ages = [15, 19, 24, 26];

// function checkAdult(age) {
// 	return age >= 18;
// }

// function ArrayPractice() {
// 	document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
// }

// Result: 1, It return index of first element only which pass the text.



