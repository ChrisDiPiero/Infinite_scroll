const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loder');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'lV5g_vpcC4JyY93yRfnoIRgV3xHIbG0Joo5nXK1EBZg';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// setAttribute function for comoponent
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Component creation
function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // image component
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
            // nest image in link in container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get images - Unsplash
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catch error
    }
}

// Document load
getPhotos();