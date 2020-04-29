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
// Result: false
// If all the element pass the test then result will be true, else false

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

// // forEach()
// let fruits = ["apple", "mango", "grapes"];

// fruits.forEach(ArrayPractice);

// function ArrayPractice(item, index) {
// 	document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
// }
// /* 
// 0:apple
// 1:mango
// 2:grapes */


// from()
// let myArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// document.getElementById("demo").innerHTML = myArray;
// // Result: A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z

// // includes()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let n = fruits.includes('Mango');
// document.getElementById("demo").innerHTML = n ;
// // Result: true

// indexof()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let n = fruits.indexOf('Mango');
// document.getElementById("demo").innerHTML = n ;
// // Result: 3


// isArray()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let n = Array.isArray(fruits);
// document.getElementById("demo").innerHTML = n ;
// // Result: true

// join()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let x = document.getElementById("demo");
// x.innerHTML = fruits.join(' or ') ;
// // Result: Banana or Orange or Apple or Mango

// keys()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let ab = fruits.keys();

// for (x of ab) {
//     document.getElementById("demo").innerHTML += x + "<br>";
// }
// /* 
// 0
// 1
// 2
// 3
// */

// length
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let x = document.getElementById("demo").innerHTML = fruits.length;
// // Result: 4


// lastIndexOf()
// let fruits = ["Banana", "Orange", "Apple", "Mango", "Apple","Banana", "Orange"];
// let a = fruits.lastIndexOf('Apple', 2)
// let x = document.getElementById("demo").innerHTML = a;
// /* Result: 2 because it start counting from index 2. And it returns -1 if it unable to get
// search element */

// map()
// let numbers = [4, 9, 16, 25];
// let x = numbers.map(Math.sqrt)
// document.getElementById("demo").innerHTML = x;
// // Result: 2,3,4,5

// pop()
// let numbers = [4, 9, 16, 25];
// document.getElementById("demo").innerHTML = numbers;
// function ArrayPractice(){
//     numbers.pop();
//     document.getElementById("demo").innerHTML = numbers;
// }
// // Result: Remove element one by one from last

// prototype
// Array.prototype.myUcase = function (){
//     let i;
//     for(i=0; i< this.length; i++) {
//         this[i] = this[i].toUpperCase();
//     };
// };

// function ArrayPractice(){
//     let fruits =
//     fruits.myUcase();
//     document.getElementById("demo").innerHTML = fruits;
// }
// // Result: BANANA,ORANGE,APPLE,MANGO

// push()
// let fruits =  ["Banana", "Orange", "Apple", "Mango"];
// fruits.push('Grapes');
// document.getElementById('demo').innerHTML = fruits;
// // Result: Banana,Orange,Apple,Mango,Grapes

// reduce()
// let numbers = [123, 50, 23];
// document.getElementById('demo').innerHTML = numbers.reduce(myFunc);
// function myFunc(total, num) {
//     return total - num;
// }
// // 50

// reduceRight()
// let numbers = [175, 50, 25];
// document.getElementById("demo").innerHTML = numbers.reduceRight(ArrayPractice);

// function ArrayPractice(total, num) {
//     return total - num;
// }
// // Result: -200

// reverse()
let Gatgets = ["HP", "DELL", "MAC", "MSI", "ASUS"];

document.getElementById("demo").innerHTML = Gatgets;

function ArrayPractice() {
    Gatgets.reverse();
    document.getElementById("demo").innerHTML = Gatgets;   
}

// Result: Reverse the Array elements





















