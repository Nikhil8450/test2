// DOM elements
const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLElement;
const hamburgerIcon = document.querySelector('.menu-content') as HTMLDListElement;

// Open hamburger menu on hover
hamburgerIcon.addEventListener('mouseenter', () => {
  hamburgerMenu.classList.add('open');
});

// Close hamburger menu on mouseout
hamburgerMenu.addEventListener('mouseleave', () => {
  hamburgerMenu.classList.remove('open');
});
