// DOM elements
var hamburgerMenu = document.querySelector('.hamburger-menu');
var hamburgerIcon = document.querySelector('.menu-content');
// Open hamburger menu on hover
hamburgerIcon.addEventListener('mouseenter', function () {
    hamburgerMenu.classList.add('open');
});
// Close hamburger menu on mouseout
hamburgerMenu.addEventListener('mouseleave', function () {
    hamburgerMenu.classList.remove('open');
});
