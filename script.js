// Profile Image
const profileImage = document.getElementById('profileImage');
if (profileImage) {
    profileImage.addEventListener('error', function() {
        // If image fails to load
        const container = this.parentElement;
        const name = 'Galav Bikram Aatreya'; 
        const initials = name.match(/\b\w/g) || [];
        const initialsText = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        
        container.innerHTML = `<div class="profile-fallback">${initialsText}</div>`;
    });
}

// Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-links a');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Link clicked:', this.href);
        });
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// Add animation delay to skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Add animation delay to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
});

