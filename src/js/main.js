// This file contains the main JavaScript functionality for the course site, handling user interactions and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize course navigation
    initCourseNavigation();

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('.interactive');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            alert('You clicked on an interactive element!');
        });
    });
});

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