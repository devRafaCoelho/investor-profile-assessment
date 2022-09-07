const cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.questions-cards');
const content = document.querySelector('.questions-content');
const position = document.querySelectorAll('.position');
const image = document.querySelector('.questions-content img');
let lastIndex = [];

cards.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        cardsContainer.classList.add('hidden');
        position[index].classList.remove('hidden');
        content.classList.remove('hidden');
        image.classList.remove('hidden');

        lastIndex.push(index);

        if (lastIndex.length > 1 && index === lastIndex[0]) {
            lastIndex.shift();
        } else if (lastIndex.length > 1 && index !== lastIndex[0]) {
            position[lastIndex[0]].classList.add('hidden');
            lastIndex.shift();
        }
    });
});

image.addEventListener('click', () => {
    cardsContainer.classList.remove('hidden');
    content.classList.add('hidden');
    image.classList.add('hidden');
});