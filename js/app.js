//--------------- Menu Bar ---------------
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
});

// ---------------Dark Theme--------------- 
var iconMoon = document.querySelector('#icon-moon')
 
iconMoon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    iconMoon.classList.toggle('bi-sun-fill');
});