const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuContent = document.querySelector(".menu-content");
hamburgerMenu.addEventListener("click", function () {
menuContent.classList.toggle("active");
});
