"use strict";
/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
var magicians1 = [
    { name: "Harry Houdini" },
    { name: "David Copperfield" },
    { name: "penn Jillete" }
];
function make_great(magicians1) {
    magicians1.forEach(function (magician) {
        magician.name = " the Great "
            + magician.name;
    });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician.name);
    });
}
make_great(magicians1);
show_magicians(magicians1);
