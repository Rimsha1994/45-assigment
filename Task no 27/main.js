"use strict";
/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
Object.defineProperty(exports, "__esModule", { value: true });
let allienColor = "green";
if (allienColor == "green") {
    console.log(`the player earned 5 points`);
}
else if (allienColor == "yellow") {
    console.log(`the player earned 10 points`);
}
else if (allienColor == "red") {
    console.log(`the player earned 15 points`);
}
else {
    console.log(`the player earned 0 points`);
}
