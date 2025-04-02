let slideIndex = 0;
const images = [
    "school_images/download.jpeg",
    "school_images/image 2.jpeg",
    "school_images/image3.jpeg",
    "school_images/budo-history.jpeg",
    "school_images/infrastructure.jpeg"
];
const time = 3000; // Time interval in milliseconds

function changeSlide() {
    const slide = document.getElementById("slide");
    slide.src = images[slideIndex];
    slideIndex = (slideIndex + 1) % images.length; // Loop back to the first image
    setTimeout(changeSlide, time); // Schedule the next image change
}

// Start the slideshow when the page loads
window.onload = changeSlide;

document.querySelector('.button').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    // Add scrolling class for animation
    this.classList.add('scrolling');
    
    // Smooth scroll to target
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Remove scrolling class after animation
    setTimeout(() => {
        this.classList.remove('scrolling');
    }, 1000);
});