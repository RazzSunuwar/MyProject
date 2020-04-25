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
function ArrayPractice() {
	let Laptops = ["HP", "Dell", "MAC"];
	document.getElementById("demo").innerHTML = Laptops.fill("HP ENVY");
}

// Result: HP ENVY,HP ENVY,HP ENVY 

