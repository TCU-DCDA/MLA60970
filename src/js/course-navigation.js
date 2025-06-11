// Course Navigation Handler
// Manages navigation highlighting and responsive behavior

document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation based on current page
    setActiveNavigation();
    
    // Handle responsive navigation if needed
    initResponsiveNavigation();
    
    // Initialize dropdown functionality
    initDropdownMenus();
});

function initDropdownMenus() {
    // Handle mobile dropdown toggles
    const mobileDropdowns = document.querySelectorAll('.mobile-nav .dropdown > a');
    mobileDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            const parentLi = this.parentElement;
            parentLi.classList.toggle('active');
            
            // Close other dropdowns
            mobileDropdowns.forEach(otherDropdown => {
                if (otherDropdown !== this) {
                    otherDropdown.parentElement.classList.remove('active');
                }
            });
        });
    });
    
    // Handle desktop dropdown hover behavior (CSS handles this, but we can add click for mobile)
    const desktopDropdowns = document.querySelectorAll('.hero-nav .dropdown > a');
    desktopDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // Only prevent default on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parentLi = this.parentElement;
                parentLi.classList.toggle('active');
            }
        });
    });
}

function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Check if this link matches the current page
        const linkPath = link.getAttribute('href');
        
        // Handle different path scenarios
        if (currentPath.includes('index.html') || currentPath.endsWith('/')) {
            if (linkPath.includes('index.html') || linkPath === '../../index.html') {
                link.classList.add('active');
            }
        } else if (currentPath.includes('week1.html') && linkPath.includes('week1.html')) {
            link.classList.add('active');
        } else if (currentPath.includes('week2.html') && linkPath.includes('week2.html')) {
            link.classList.add('active');
        } else if (currentPath.includes('week3.html') && linkPath.includes('week3.html')) {
            link.classList.add('active');
        } else if (currentPath.includes('week4.html') && linkPath.includes('week4.html')) {
            link.classList.add('active');
        } else if (currentPath.includes('assignments.html') && linkPath.includes('assignments.html')) {
            link.classList.add('active');
        }
    });
}

function initResponsiveNavigation() {
    // Add mobile menu functionality if needed
    const header = document.querySelector('header');
    if (!header) return;
    
    // Create mobile menu button if it doesn't exist
    let mobileMenuBtn = header.querySelector('.mobile-menu-btn');
    if (!mobileMenuBtn && window.innerWidth <= 768) {
        mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        
        const nav = header.querySelector('nav');
        if (nav) {
            header.insertBefore(mobileMenuBtn, nav);
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('nav-open');
                this.classList.toggle('active');
            });
        }
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    initResponsiveNavigation();
});