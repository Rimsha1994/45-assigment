//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
//to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


const transportationModes: string[] =
["Tesla Model S", "Honda motarcycle", "Boeing 747", "Bicycle"];

console.log(
    "Statement about different modes of transportation:"
);

console.log (`I would like to own a ${transportationModes[0]}. `);

console.log(`I dream of riding a ${transportationModes[1]}.`);

console.log(`I wish to travel in a ${transportationModes[2]}.`);

console.log(`I enjoy riding my ${transportationModes[3]}.`);

const myTransport = ["car", "bike", "bus", "train", "aeroplane"];

//method (loop)

for (let i = 0; i < myTransport.length; i++)
    {console.log(`i would like to own a ${myTransport[i]}`);}

