//44. Sandwiches: Write a function that accepts a array of items a person wants
//on a sandwich. The function should have one parameter that collects as many
//items as the function call provides, and it should print a summary of the sandwich
//that is being ordered. Call the function three times, using a different number
//of arguments each time.


function makeSandwhich(... items: string[]) {
    console.log (
        "Making a sandwhich with the folloeing items:"
    );
    items.forEach(items => console.log("." + items));

}

makeSandwhich('chicken', 'cheese', 'butter');

makeSandwhich('egg', 'butter','ketchup','chicken');

makeSandwhich('peanut butter', 'sauce');
