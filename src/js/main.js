// This file contains the main JavaScript functionality for the course site, handling user interactions and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize course navigation
    initCourseNavigation();
    
    // Initialize mobile hamburger menu
    initHamburgerMenu();

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('.interactive');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            alert('You clicked on an interactive element!');
        });
    });

    // Randomize week-banner backgrounds on home page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname.endsWith('experimental-home.html')) {
        const mondrianImages = [
            'images/mondrian_v2.png',
            'images/mondrian_v3.png',
            'images/mondrian_v4.png'
        ];
        document.querySelectorAll('.week-banner').forEach(banner => {
            const randomImg = mondrianImages[Math.floor(Math.random() * mondrianImages.length)];
            banner.style.backgroundImage = `url('${randomImg}')`;
            banner.style.backgroundSize = 'cover';
            banner.style.backgroundPosition = 'center';
        });
        // Randomize schedule subcard backgrounds with gradients aligned to primary color
        const gradients = [
            'linear-gradient(135deg, #4d1979 0%, #8B5CF6 100%)',
            'linear-gradient(135deg, #4d1979 0%, #EC4899 100%)',
            'linear-gradient(135deg, #4d1979 0%, #10B981 100%)',
            'linear-gradient(135deg, #4d1979 0%, #e9ecef 100%)',
            'linear-gradient(135deg, #4d1979 0%, #5b4465 100%)'
        ];
        document.querySelectorAll('.schedule-subcard').forEach(card => {
            // Remove any previous background images/overlays
            card.style.backgroundImage = '';
            card.style.background = gradients[Math.floor(Math.random() * gradients.length)];
            card.style.color = '#fff';
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.style.zIndex = '1';
            // Remove overlays if present
            Array.from(card.querySelectorAll('div')).forEach(child => {
                if (child.style && child.style.background && child.style.background.includes('rgba(40,20,60')) {
                    child.remove();
                }
            });
        });
    }
});

// Global mobile menu closer - ensures menu closes on any navigation (enhanced)
document.addEventListener('click', function(e) {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburger = document.getElementById('hamburger-menu');
    
    if (mobileNav && hamburger) {
        // Check if clicked element is a link inside mobile nav
        if (e.target.closest('#mobile-nav a')) {
            console.log('Mobile nav link clicked globally - forcing menu close');
            // Force close immediately
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            const navOverlay = document.getElementById('nav-overlay');
            if (navOverlay) navOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Force close again after a short delay to ensure it sticks
            setTimeout(() => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                if (navOverlay) navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }, 50);
        }
    }
});

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const navOverlay = document.getElementById('nav-overlay');
    const mobileNavLinks = document.querySelectorAll('#mobile-nav a');

    if (!hamburger || !mobileNav || !navOverlay) {
        console.error('Hamburger menu or related elements are missing.');
        return;
    }

    console.log('Hamburger menu initialized.');
    console.log('Found mobile nav links:', mobileNavLinks.length);

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        console.log('Hamburger menu clicked.');
        toggleMobileMenu();
    });

    // Close menu when overlay is clicked
    navOverlay.addEventListener('click', function() {
        console.log('Overlay clicked - closing menu');
        closeMobileMenu();
    });

    // Close menu when a link is clicked (enhanced with force close)
    mobileNavLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            console.log(`Mobile nav link ${index} clicked: ${this.href}`);
            // Force immediate close
            setTimeout(() => {
                closeMobileMenu();
            }, 100);
            // Allow the link to proceed normally
        });
    });

    // Additional event delegation for mobile nav links (backup method)
    mobileNav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            console.log('Mobile nav link clicked via delegation:', e.target.href);
            // Force immediate close
            setTimeout(() => {
                closeMobileMenu();
            }, 100);
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });

    function toggleMobileMenu() {
        const isActive = hamburger.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    function openMobileMenu() {
        hamburger.classList.add('active');
        mobileNav.classList.add('active');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        console.log('Mobile menu closed');
    }

    // Enhanced mobile menu closing - force close on any link click
    window.addEventListener('beforeunload', function() {
        closeMobileMenu();
    });
    
    // Force close mobile menu on page navigation
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Immediate close without delay
            closeMobileMenu();
        });
    });

    // Additional fallback - force close menu after any click inside mobile nav
    mobileNav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            // Small delay to allow navigation to begin
            setTimeout(() => {
                closeMobileMenu();
            }, 100);
        }
    });
}

function initCourseNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            loadPage(targetPage);
        });
    });
}

function loadPage(page) {
    const contentArea = document.getElementById('content');
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            contentArea.innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}