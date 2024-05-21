"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MyFriends = ["Maryam", "Junaid", "Ayesha", "Zileid", "Shama", "Yousuf\n"];
console.log(`table is not available, i can only invite 2 persons\n`);
let friend1 = MyFriends.pop();
console.log(`sorry dear. ${friend1}) you are not invited!`);
let friend2 = MyFriends.pop();
console.log(`sorry dear. ${friend2}) you are not invited!`);
let friend3 = MyFriends.pop();
console.log(`sorry dear. ${friend3}) you are not invited!`);
let friend4 = MyFriends.pop();
console.log(`sorry dear. ${friend4}) you are not invited!`);
for (let i = 0; i < MyFriends.length; i++) {
    console.log(`dear. ${MyFriends[i]} you are still invited`);
}
MyFriends.pop();
MyFriends.pop();
console.log(MyFriends);
