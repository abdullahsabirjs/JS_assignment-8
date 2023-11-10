// ! Funcion 1
function showAlert() {
    alert('Hello wellcome to  my website');
}


// ! Funcion 2
function setupImageClickAlerts() {
    const images = document.querySelectorAll('.mobile-image');
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert('Thanks for purchasing a phone from us');
        });
    });
}

// Initialize the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', setupImageClickAlerts);


// ! Funcion 3
function setupRowDeletion() {
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.parentElement.remove(); // Remove the parent row of the button
        });
    });
}

// Initialize the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', setupRowDeletion);


// ! Funcion 4
function setupImageHover() {
    const image = document.getElementById('hover-image');
    const originalSrc = image.src;
    const hoverSrc = 'media/hover.jpg'; // Path to the image to display on hover

    image.addEventListener('mouseover', () => {
        image.src = hoverSrc;
    });

    image.addEventListener('mouseout', () => {
        image.src = originalSrc;
    });
}

// Initialize the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', setupImageHover);



// ! Funcion 5
function setupCounter() {
    let counter = 0;
    const counterDisplay = document.getElementById('counter-display');
    const increaseButton = document.getElementById('increase-button');
    const decreaseButton = document.getElementById('decrease-button');

    increaseButton.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
    });

    decreaseButton.addEventListener('click', () => {
        counter--;
        counterDisplay.textContent = counter;
    });
}

// Initialize the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', setupCounter);
