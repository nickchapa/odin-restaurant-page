import "./styles.css";
import {homeTab} from "./home.js";
import {menu} from "./menu.js";
import {contact} from "./contact.js";

const divContent = document.getElementById('content');

const homeButton = document.querySelector('#homeTab');
const menuButton = document.querySelector('#menuTab');
const contactButton = document.querySelector('#contactTab');

homeButton.addEventListener('click', (e) => {
    divContent.textContent = '';
    homeTab();
});

menuButton.addEventListener('click', (e) => {
    divContent.textContent = '';
    //menuTab();
});

contactButton.addEventListener('click', (e) => {
    divContent.textContent = '';
    //contactTab();
});

console.log(menu);
console.log(contact);