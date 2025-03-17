'use strict';

const startButton = document.querySelector('.get-started');
const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
const itemContainers = document.querySelectorAll('.item-container');

// função para pegar uma imagem de cachorro aleatória da API
async function getDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
}


// função para criar um elemento de imagem e retornar ele
function createImageElement(url) {
    const img = document.createElement('img');
    img.src = url;
    img.style.width = '120px';
    img.style.height = '120px';
    img.style.borderRadius = '8px';
    img.style.objectFit = 'cover';
    return img;
}

startButton.addEventListener('click', async () => {
    startButton.style.display = 'none'; 
    gridContainer.style.display = 'grid';
    
    //loop para cada container
    for (let i = 0; i < itemContainers.length; i++) {
        const container = itemContainers[i];
        container.style.display = 'flex';
        
        //delay na animação com base na posição do container
        container.style.animationDelay = `${i * 0.1}s`;
        container.classList.add('fade-in');
        

        const imagePlaceholder = container.querySelector('.image-placeholder');
        
        try {
            
            const imageUrl = await getDogImage();
            
            
            const img = createImageElement(imageUrl);
            
           
            if (imagePlaceholder) {
                imagePlaceholder.replaceWith(img);
            }
        } catch (error) {
            console.error('Error setting up container:', error);
        }
    }
});




