//43. Unchanged Magicians: Start with your work from Exercise 40. Call the
//function make_great() with a copy of the array of magicians’ names. Because the
//original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original
//names and one array with the Great added to each magician’s name.



var magicians1= [
    { name: "Harry Houdini" },
    { name: "David Copperfield" },
    { name: "penn Jillette" },

];
function make_great(magicians1: any[]) {
    magicians1.forEach(function (magician) {
        magician.name = "the Great " + magician.name;
    });
}    

function
show_magicians(magician: { name: any; }[]) {
    magician.forEach(function (
        magician: { name: any; })
{
    console.log(magician.name);
}
    );
}
 
make_great(magicians1);

show_magicians(magicians1);