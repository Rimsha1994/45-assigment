/*37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/


function makeShirt(size: string = `large`,
 message : string = `I love TypeScript`): void {
    console.log (`Creating a ${size}
        shirt with the message: '${message}'`);
 }
makeShirt();


makeShirt('medium');

makeShirt('small', 'TypeScript is amazing!');
