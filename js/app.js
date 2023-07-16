window.addEventListener('DOMContentLoaded', () => {
    //--------------- Menu Bar ---------------
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bi-x');
        navbar.classList.toggle('active');
    });

    // ---------------Dark Theme--------------- 
    
    const iconMoon = document.querySelector('#icon-moon')
    const darkMode = localStorage.getItem('darkMode')

    if (darkMode) document.body.classList.add(darkMode)
    
    iconMoon.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        iconMoon.classList.toggle('bi-sun-fill');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('darkMode', 'dark-theme')
        } else {
            localStorage.removeItem('darkMode')
        }
    });

    // ---------------typed animation--------------- 
    const typed = new Typed('.name-input', {
        strings: ['Front-End Web Developer', 'Web Designer'],
        typeSpeed: 90,
        backSpeed: 60,
        loop: true
    })

});