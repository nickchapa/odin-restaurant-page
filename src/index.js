import "./styles.css";
import {homeTab} from "./home.js";
import {menuTab} from "./menu.js";
import {contactTab} from "./contact.js";

const divContent = document.getElementById('content');

const homeButton = document.querySelector('#homeTab');
const menuButton = document.querySelector('#menuTab');
const contactButton = document.querySelector('#contactTab');

homeTab();

homeButton.addEventListener('click', (e) => {
    divContent.textContent = '';
    homeTab();
});

menuButton.addEventListener('click', (e) => {
    divContent.textContent = '';
    menuTab();
});

contactButton.addEventListener('click', (e) => {
    divContent.textContent = '';
    contactTab();
});