'use strict';

const startButton = document.querySelector('.get-started');
const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
const itemContainers = document.querySelectorAll('.item-container');

startButton.addEventListener('click', () => {
    gridContainer.style.display = 'grid';
    startButton.style.display = 'none';
    itemContainers.forEach((container, index) => {
        container.style.display = 'flex';
        container.style.animationDelay = `${index * 0.1}s`;
        //loop para adicionar a classe fade-in a cada container, o template literal garente que cada container tenha um delay diferente
        container.classList.add('fade-in');
    });
});



