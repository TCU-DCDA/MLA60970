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
});

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const navOverlay = document.getElementById('nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    if (!hamburger || !mobileNav || !navOverlay) {
        console.error('Hamburger menu or related elements are missing.');
        return;
    }

    console.log('Hamburger menu initialized.');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        console.log('Hamburger menu clicked.');
        toggleMobileMenu();
    });

    // Close menu when overlay is clicked
    navOverlay.addEventListener('click', function() {
        closeMobileMenu();
    });

    // Close menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
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
    }
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