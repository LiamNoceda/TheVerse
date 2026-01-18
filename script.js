"use strict";

// characters long >=2 and 50<=
let spacename = prompt("Enter your name of the space you want to vision: ", "My space");
let vision = false
while(!vision) {
    if(spacename.length < 2 || spacename.length > 50) {
        alert(`Please, your space ${spacename} it must be between 3 and 20 characters long.`);
        spacename = prompt("Enter your name of the space you want to vision: ", "My space")
        console.log("No par 3-20")
    } else if(spacename == "Leam" || spacename == "leam") {
        vision = true;
        alert("Welcome in home, my Lord - Leam");
        console.log("Name = Leam - lord");
    } else {
        vision = true;
        alert(`Hello - ${spacename}`);
        console.log("Yes par 3-20");
    }
}
