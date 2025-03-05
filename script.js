// Carousel Functionality
const carouselSlides = document.querySelector('.carousel-slides');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

// Function to update carousel slides
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset based on the current index
    carouselSlides.style.transform = `translateX(${offset}%)`; // Apply the transform
}

// Event listener for previous button
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Move to the previous slide
    } else {
        currentIndex = slides.length - 1; // Loop to the last slide if at the beginning
    }
    updateCarousel(); // Update the carousel
});

// Event listener for next button
nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++; // Move to the next slide
    } else {
        currentIndex = 0; // Loop to the first slide if at the end
    }
    updateCarousel(); // Update the carousel
});