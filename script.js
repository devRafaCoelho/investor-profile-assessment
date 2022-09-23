const cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.questions-cards');
const position = document.querySelectorAll('.position');
const image = document.querySelector('.questions-content img');
let lastIndex = [];

cards.forEach((element, index) => {
    element.addEventListener('click', () => {
        cardsContainer.style.display = 'none';
        position[index].style.display = 'flex';
        image.style.display = 'flex';
        lastIndex = index;
    });
});

image.addEventListener('click', () => {
    position[lastIndex].style.display = 'none';
    cardsContainer.style.display = 'flex';
    image.style.display = 'none';
});