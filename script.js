'use strict';

const startButton = document.querySelector('.get-started');
const body = document.querySelector('body');

startButton.addEventListener('click', () => {
    body.classList.remove('blur');
});



