"use strict";
//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let myfriends = ["Maryam", "Yousuf", "Zainab", "Falak"];
console.log(`i am inviting ${myfriends.length}number of my friends to my dinner which are following\n`);
for (let i = 0; i < myfriends.length; i++) {
    console.log(`${i + 1}. ${myfriends[i]}`);
}
let gueastList = ["Farah", "Iqra", "Maham", "Areeba"];
console.log(`I am inviting $ {gueastList.length}people to dinner.`);
