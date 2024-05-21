"use strict";
//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
let Myname = "Maryam";
console.log(Myname == "Maryam");
console.log(Myname !== "Maryam");
let anyNumber = 10;
console.log(anyNumber == 10);
console.log(anyNumber !== 10);
console.log(anyNumber > 5);
console.log(anyNumber < 5);
console.log(anyNumber <= 5);
console.log(anyNumber >= 5);
let num1 = 10;
let num2 = 5;
console.log(num1 > 9 && num2 < 5);
console.log(num1 > 9 || num2 < 5);
let Myarray = [2, 3, "Maryam"];
let myString = "Yousuf";
console.log(Array.isArray(Myarray));
console.log(Array.isArray(myString));
