window.addEventListener('DOMContentLoaded', () => {
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

    // ---------------typed animation--------------- 
    const typed = new Typed('.name-input', {
        strings: ['Nusratilla Rikhsiev', 'Front-End Web Developer', 'UI UX Designer'],
        typeSpeed: 90,
        backSpeed: 60,
        loop: true
    })

});