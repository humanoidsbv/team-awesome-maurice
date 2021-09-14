const modal = document.querySelector('.modal__content');
const button = document.getElementById('button');
const buttonToggle = document.querySelector('.modal-button');

button.addEventListener('click', () => {
    modal.classList.toggle('modal__content-toggle');
    buttonToggle.classList.toggle('modal-button-cross');
});

