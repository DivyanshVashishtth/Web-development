let score = "33abc";

console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof(valueInNumber));
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = "d";
let booleanIsLOggedIn = Boolean(isLoggedIn);
console.log(booleanIsLOggedIn);


let someNumber = 123;
let stringNUmber = String(someNumber);
console.log(stringNUmber);
console.log(typeof(stringNUmber));

// **************************  Operations ****************************************
let str1 = "Hello";
let str2 = " world";
let str3 = str1 + str2; //String concatination-

console.log(str3);
console.log("1" + 2);

console.log(typeof("1" + 2));
