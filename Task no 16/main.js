"use strict";
//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
const myFriend = ["Maryam", "Zainab", "Yousuf", "Junaid"];
console.log(myFriend);
console.log(`we have 3 more friends to invite on dinner\n`);
myFriend.unshift("Ayesha");
console.log(myFriend);
myFriend.splice(2, 0, "Fatima");
console.log(myFriend);
myFriend.push("Minno");
console.log(myFriend);
for (let i = 0; i < myFriend.length; i++) {
    console.log(`my dear friends.${myFriend[i]}you are invited at my home for dinner`);
}
