"use strict"

// Select elements
const butt = document.querySelector('#b');
const element =document.querySelector('#e');

// for disabled input
const contact = document.querySelector("#contact");
const send = document.querySelector("#send");

// state input F
contact.disabled = false;

// Disabled input false or true
send.addEventListener("click", () => {
    if (contact.disabled) {
        contact.disabled = false;
        console.log("Input: false");
        contact.focus();
    } else {
        contact.disabled = true;
        console.log("Input: true");
        contact.blur();
    }
});

// add click event listener to the button to toggle the visibility of the information block
if (butt && element) {
    butt.addEventListener('click', () => {
    element.classList.toggle('active');
    console.log('Button clicked, toggling information block visibility');
    
    if (element.classList.contains('active')) {
        console.log('Information block is now visible');
    } else {
        console.log('Information block is now hidden');
    }
});
};
