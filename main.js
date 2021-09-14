const modal = document.querySelector('.modal-content');
const button = document.getElementById('btn');
const buttonToggle = document.querySelector('.modal-btn');

button.addEventListener('click', () => {
    modal.classList.toggle('modal-content-toggle');
    buttonToggle.classList.toggle('modal-btn-cross');
});
