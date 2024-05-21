"use strict";
//Question 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
//independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in
//your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!
Object.defineProperty(exports, "__esModule", { value: true });
let favoriteFruits = ["apple", "mango", "orange"];
if (favoriteFruits.includes("banana")) {
    console.log(`i would like to eat banana`);
}
else if (favoriteFruits.includes("apple")) {
    console.log(`i would like to eat apple`);
}
else {
    console.log(`fruits are not available!`);
}
let Fruitavailable = "banana";
if (favoriteFruits.includes(Fruitavailable)) {
    console.log(`i would like to eat ${Fruitavailable}`);
}
else {
    console.log(`fruit is not available`);
}
