// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('#contact-form'); // Fixed: Use the actual form ID
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simulated form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Explicitly refer to the form
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe menu cards
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card); // Changed from .menu-card to .card (if that's your class)
});
