// Course Navigation Handler
// Manages navigation highlighting and responsive behavior

document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation based on current page
    setActiveNavigation();
    
    // Handle responsive navigation if needed
    initResponsiveNavigation();
    
    // Initialize dropdown functionality
    initDropdownMenus();
    
    // Enhanced responsive navigation with schedule improvements
    initEnhancedResponsiveNavigation();
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

// Add layout switching functionality for schedule tables
function initScheduleLayoutToggle() {
    // Only add controls on mobile screens
    if (window.innerWidth <= 768) {
        const scheduleContainer = document.querySelector('.schedule-container');
        if (scheduleContainer && !document.querySelector('.layout-controls')) {
            
            // Create layout toggle controls
            const layoutControls = document.createElement('div');
            layoutControls.className = 'layout-controls';
            layoutControls.innerHTML = `
                <div class="layout-toggle">
                    <button id="table-layout" class="active" data-layout="table">
                        📋 Table View
                    </button>
                    <button id="card-layout" data-layout="cards">
                        🎴 Card View
                    </button>
                </div>
            `;
            
            // Insert before the first project section
            const firstSection = scheduleContainer.querySelector('.project-section');
            if (firstSection) {
                scheduleContainer.insertBefore(layoutControls, firstSection);
                
                // Add event listeners
                const tableBtn = document.getElementById('table-layout');
                const cardBtn = document.getElementById('card-layout');
                
                if (tableBtn && cardBtn) {
                    tableBtn.addEventListener('click', () => switchLayout('table'));
                    cardBtn.addEventListener('click', () => switchLayout('cards'));
                }
            }
        }
    }
}

function switchLayout(layoutType) {
    const container = document.querySelector('.schedule-container');
    const tableBtn = document.getElementById('table-layout');
    const cardBtn = document.getElementById('card-layout');
    
    if (!container || !tableBtn || !cardBtn) return;
    
    // Update button states
    tableBtn.classList.toggle('active', layoutType === 'table');
    cardBtn.classList.toggle('active', layoutType === 'cards');
    
    // Update container class
    if (layoutType === 'cards') {
        container.classList.add('schedule-grid-layout');
        // Store preference
        localStorage.setItem('schedule-layout-preference', 'cards');
    } else {
        container.classList.remove('schedule-grid-layout');
        localStorage.setItem('schedule-layout-preference', 'table');
    }
}

// Load saved layout preference
function loadLayoutPreference() {
    const savedLayout = localStorage.getItem('schedule-layout-preference');
    if (savedLayout && window.innerWidth <= 768) {
        switchLayout(savedLayout);
    }
}

// Enhanced responsive navigation with schedule improvements
function initEnhancedResponsiveNavigation() {
    initResponsiveNavigation(); // Call existing function
    initScheduleLayoutToggle();
    loadLayoutPreference();
    
    // Re-initialize on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Re-check if we need mobile controls
            const controls = document.querySelector('.layout-controls');
            if (window.innerWidth > 768 && controls) {
                controls.remove();
            } else if (window.innerWidth <= 768 && !controls) {
                initScheduleLayoutToggle();
                loadLayoutPreference();
            }
        }, 250);
    });
}

// Handle window resize
window.addEventListener('resize', function() {
    initResponsiveNavigation();
});