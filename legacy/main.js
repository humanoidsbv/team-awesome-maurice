const drawer = document.querySelector('.navbar-mobile__menu');
const button = document.getElementById('drawerOpener');
const buttonToggle = document.querySelector('.header__button');

button.addEventListener('click', () => {
    drawer.classList.toggle('navbar-mobile--toggle');
    buttonToggle.classList.toggle('header__button-cross');
});

