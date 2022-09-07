const cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.questions-cards');
const content = document.querySelector('.questions-content');
const position = document.querySelectorAll('.position');
const image = document.querySelector('.questions-content img');

cards.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        cardsContainer.classList.add('hidden');
        position[index].classList.remove('hidden');
        content.classList.remove('hidden');
        image.classList.remove('hidden');
    });
})

