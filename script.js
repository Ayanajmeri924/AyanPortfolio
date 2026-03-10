// --- Typing Effect ---
const phrases = ["Software Engineering Student", "Java Developer", "Backend Enthusiast", "Problem Solver"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetween = 2000;

const typingElement = document.querySelector('.typing-text');

function typeEffect() {
    if (!typingElement) return;

    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        speed = pauseBetween;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', () => {
    if(phrases.length > 0) typeEffect();
});

// --- Mobile Navigation Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
    
    // Burger Animation
    hamburger.classList.toggle('toggle');
});

// Close nav when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        }
    });
});

// --- Scroll Effects ---
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Header shadow and bg on scroll
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Reveal elements on scroll
    const reveals = document.querySelectorAll('.glass-panel');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].style.opacity = '1';
            reveals[i].style.transform = 'translateY(0)';
        }
    }
});

// Initial state for scroll animation elements
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.glass-panel:not(.hero-content)');
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
});

// --- Form Submission Prevention (Demo) ---
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'Message Sent!';
        btn.style.background = '#00b4d8';
        
        contactForm.reset();
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    });
}
