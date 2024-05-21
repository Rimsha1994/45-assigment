/*41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/


function showMagicians(magicians: string[]): void{ 

    magicians.forEach(magician => 
        console.log(magician));
}

const magicianNames: string[] = [ ' DERREN BROWN',
' DAVID BLAINE', ' CRISS ANGEL', ' DYNAMO'

];

showMagicians(magicianNames);

