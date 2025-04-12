const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Animations

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -250,
    stagger: 0.3,
});

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12,
});

gsap.from('.animate-img', {
    scrollTrigger: '.animate-img',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5,
});

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2,
    onComplete: function() {
        gsap.set(this.targets(), { clearProps: "transform" });
    }
});

gsap.from('.animate-team', {
    scrollTrigger: '.animate-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2,
    onComplete: function() {
        gsap.set(this.targets(), { clearProps: "transform" });
    }
});

gsap.from('.animate-email', {
    scrollTrigger: '.animate-email',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.4,
});

// Slideshow Services
let slideIndex = 1; // Initialize slideIndex to 1
let slides = document.getElementsByClassName("mySlides");
let slideshowTimeout; // Variable to hold the setTimeout reference

showSlides();

// Function to display slides automatically
function showSlides() {
  let i;

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Set timeout for automatic slideshow
  slideshowTimeout = setTimeout(nextSlide, 4000); // Change image every 4 seconds
}

// Function to navigate to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  showSlides();
}

// Function to navigate to specific slide when clicking on dots
function currentSlide(n) {
  slideIndex = n;
  clearTimeout(slideshowTimeout); // Stop automatic slideshow
  showSlides();
}







