// Restaurant Menu JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu functionality
    initializeMenu();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize scroll effects
    initializeScrollEffects();
});

/**
 * Initialize menu tab functionality
 */
function initializeMenu() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const menuSections = document.querySelectorAll('.menu-section');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all tabs and sections
            navTabs.forEach(t => t.classList.remove('active'));
            menuSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Add animation class for smooth transition
            const activeSection = document.getElementById(targetSection);
            activeSection.style.animation = 'none';
            activeSection.offsetHeight; // Trigger reflow
            activeSection.style.animation = 'fadeInUp 0.6s ease-out';
        });
    });
}

/**
 * Scroll to menu section when "View Menu" button is clicked
 */
function scrollToMenu() {
    const menuNav = document.getElementById('menuNav');
    if (menuNav) {
        menuNav.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Initialize smooth scrolling for all internal links
 */
function initializeSmoothScrolling() {
    // Already handled by CSS scroll-behavior: smooth
    // This function can be used for additional smooth scrolling features
}

/**
 * Initialize scroll effects for navigation
 */
function initializeScrollEffects() {
    const nav = document.getElementById('menuNav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove shadow based on scroll position
        if (scrollTop > 100) {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

/**
 * Add hover effects to menu cards
 */
function initializeCardEffects() {
    const menuCards = document.querySelectorAll('.menu-card');
    
    menuCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle scale effect
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Initialize intersection observer for animation triggers
 */
function initializeAnimations() {
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
    
    // Observe menu cards for scroll animations
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

/**
 * Initialize reservation functionality (placeholder)
 */
function initializeReservations() {
    const reservationBtns = document.querySelectorAll('.btn-outline');
    
    reservationBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Reservation system would be integrated here. Please call (555) 123-4567 to make a reservation.');
        });
    });
}

/**
 * Initialize responsive menu for mobile
 */
function initializeResponsiveMenu() {
    const navTabs = document.querySelector('.nav-tabs');
    let isScrolling = false;
    
    // Add touch scrolling for mobile navigation
    if (navTabs) {
        navTabs.addEventListener('touchstart', function() {
            isScrolling = true;
        });
        
        navTabs.addEventListener('touchend', function() {
            setTimeout(() => {
                isScrolling = false;
            }, 100);
        });
    }
}

/**
 * Initialize all interactive features
 */
function initializeInteractivity() {
    initializeCardEffects();
    initializeAnimations();
    initializeReservations();
    initializeResponsiveMenu();
}

// Initialize additional features after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeInteractivity, 500);
});

/**
 * Handle window resize events
 */
window.addEventListener('resize', function() {
    // Handle any responsive adjustments here
    const menuGrid = document.querySelectorAll('.menu-grid');
    // Responsive grid adjustments handled by CSS
});

/**
 * Add keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    const navTabs = document.querySelectorAll('.nav-tab');
    const activeTab = document.querySelector('.nav-tab.active');
    
    if (!activeTab) return;
    
    const currentIndex = Array.from(navTabs).indexOf(activeTab);
    let nextIndex;
    
    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            nextIndex = currentIndex > 0 ? currentIndex - 1 : navTabs.length - 1;
            navTabs[nextIndex].click();
            navTabs[nextIndex].focus();
            break;
            
        case 'ArrowRight':
            e.preventDefault();
            nextIndex = currentIndex < navTabs.length - 1 ? currentIndex + 1 : 0;
            navTabs[nextIndex].click();
            navTabs[nextIndex].focus();
            break;
    }
});

/**
 * Performance optimization: Debounce scroll events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Optimized scroll handling
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);