"use strict";
/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
var UserName2 = ["admin", "maryam", "Zainab", "yousuf", "zileid",];
UserName2 = [];
//console.log(UserName2);
if (UserName2.length > 0) {
    for (var i = 0; i < UserName2.length; i++) {
        if (UserName2[i] == "admin") {
            console.log("hello".concat(UserName2[i], "would you like to see a status report?\n"));
        }
        else {
            console.log("hello".concat(UserName2[i], "thank you for logging in again"));
        }
    }
}
else {
    console.log("we need to find some users");
}
