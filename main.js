const modal = document.querySelector('.modal-content');

const button = document.getElementById('btn');


button.onclick = () => {
    modal.style.display = "flex";
};

span.onclick = () => {
    modal.style.display = "none";
};

window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}