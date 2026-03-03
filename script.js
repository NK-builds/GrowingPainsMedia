// Mobile menu toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle) {
    toggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        toggle.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.focus();
        }
    });
}

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and steps
document.querySelectorAll('.problem-card, .service-card, .step').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add fade-in styles dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
