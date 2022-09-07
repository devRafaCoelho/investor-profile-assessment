const cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.questions-cards');

cards.forEach((element) => {
    element.addEventListener('click', (event) => {
        cardsContainer.classList.add('hidden');
    });
})

