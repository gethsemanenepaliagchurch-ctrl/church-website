// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (mainNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = mainNav.contains(event.target) || mobileMenuToggle.contains(event.target);
            
            if (!isClickInside && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Shadow on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Add Active Class to Current Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Remove existing active class
        link.classList.remove('active');
        
        // Add active class to current page
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Fade-in Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.location-card, .info-card, .value-card, .ministry-card, .event-card, .pastor-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form Validation Helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(phone));
}

// Back to Top Button (if needed)
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.setAttribute('id', 'backToTop');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #1e40af, #f97316);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}

// Initialize back to top button on pages with lots of content
document.addEventListener('DOMContentLoaded', function() {
    if (document.body.scrollHeight > window.innerHeight * 2) {
        createBackToTopButton();
    }
});

// Print friendly styles
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});

console.log('Gethsemane Nepali A.G Church Website - Loaded Successfully!');