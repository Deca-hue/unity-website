// Hamburger menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Show and hide welcome alert
// Show and hide welcome alert in the center of the screen
window.addEventListener('load', function() {
    const alertBox = document.getElementById('welcome-alert');
    alertBox.style.opacity = 1; // Show the alert box
    alertBox.style.display = 'flex'; // Make it visible
    setTimeout(() => {
        alertBox.style.opacity = 0; // Fade out
        setTimeout(() => alertBox.style.display = 'none', 500); // Hide after fade-out
    }, 3000); // Display for 3 seconds
});


// Show login modal
document.querySelector('.cta-button').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'flex';
});

// Close login modal
function closeLoginForm() {
    document.getElementById('loginModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


