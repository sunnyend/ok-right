'use strict';

const startButton = document.querySelector('.get-started');
const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
const itemContainers = document.querySelectorAll('.item-container');
const faqLink = document.querySelector('.nav-faq');
const aboutLink = document.querySelector('.nav-about');
const contactLink = document.querySelector('.nav-contact'); 

    faqLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideGrid();
    });

    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideGrid();
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideGrid();
    });

itemContainers.forEach((container, i) => {
    const description = container.querySelector('.description');
    if (description) {
        description.innerHTML = `Cachorro ${i + 1}`;
    }
});
    

const hideGrid = () => {
    gridContainer.style.display = 'none';
}

const showGrid = () => {
    gridContainer.style.display = 'grid';
}
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
    console.log("button clicked");
    showGrid();
    
    //loop para cada container
    for (let i = 0; i < itemContainers.length; i++) {
        const container = itemContainers[i];
        container.style.display = 'flex';
        
        //delay na animação com base na posição do container
        container.style.animationDelay = `${i * 0.2}s`;
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

//essa função cria um popup com o conteúdo passado como parâmetro
function showPopup(content) {
    const existingPopup = document.querySelector('.popup-box');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Create new popup
    const popup = document.createElement('div');
    popup.className = 'popup-box';
    popup.innerHTML = content;
    document.body.appendChild(popup);
    
    // Show the popup
    popup.style.display = 'block';
}

// Add click listeners to each link
faqLink.addEventListener('click', (e) => {
    e.preventDefault();
    const content = document.getElementById('faq-content').innerHTML;
    showPopup(content);
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    const content = document.getElementById('about-content').innerHTML;
    showPopup(content);
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    const content = document.getElementById('contact-content').innerHTML;
    showPopup(content);
});

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.querySelector('.popup-box');
    const isClickInsidePopup = popup && popup.contains(e.target);
    const isClickOnLink = e.target.closest('.footer-nav a');
    
    if (popup && !isClickInsidePopup && !isClickOnLink) {
        popup.remove();
    }
});






