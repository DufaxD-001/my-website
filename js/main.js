document.addEventListener('DOMContentLoaded', () => {
    
    // --- MOBILE MENU LOGIC ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.toggle('is-open');
            
            // Toggle icon between Hamburger and X
            if (mobileMenu.classList.contains('is-open')) {
                this.innerHTML = '&#10006;'; // X icon
            } else {
                this.innerHTML = '&#9776;'; // Hamburger icon
            }
        });
    } 
}); 