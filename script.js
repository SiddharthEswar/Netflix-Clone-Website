// Image Slider functionality
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

// Show the current slide and hide the others
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

// Move to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Move to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Responsive Navigation Menu
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');

// Toggle menu visibility
menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
    navMenu.classList.remove('active');
  }
});

// Content Display Interactivity
const contentButtons = document.querySelectorAll('.content-button');
const contentSections = document.querySelectorAll('.content-section');

// Show the corresponding content section when a button is clicked
contentButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contentSections.forEach((section, i) => {
      section.style.display = (i === index) ? 'block' : 'none';
    });
  });
});