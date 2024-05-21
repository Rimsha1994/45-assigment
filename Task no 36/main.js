"use strict";
/*36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, label) {
    return `My shirt size ${size} and label is ${label}`;
}
let myFun = make_shirt(36, " The sunny day ");
console.log(myFun);
