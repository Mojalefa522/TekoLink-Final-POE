// Burger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing burger menu...');
    
    const burger = document.getElementById('burgerMenu');
    const menu = document.getElementById('navMenu');
    
    if (!burger || !menu) {
        console.error('Burger menu elements not found!');
        return;
    }
    
    console.log('Burger menu elements found');
    
    // Create overlay
    let overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    function toggleMenu() {
        console.log('Toggling menu');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
    
    // Burger click
    burger.addEventListener('click', function(e) {
        console.log('Burger clicked');
        e.stopPropagation();
        toggleMenu();
    });
    
    // Overlay click to close
    overlay.addEventListener('click', function() {
        console.log('Overlay clicked');
        toggleMenu();
    });
    
    // Link clicks to close menu
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Menu link clicked');
            toggleMenu();
        });
    });
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            console.log('Escape key pressed');
            toggleMenu();
        }
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            menu.classList.contains('active') && 
            !menu.contains(e.target) && 
            !burger.contains(e.target)) {
            console.log('Clicked outside menu');
            toggleMenu();
        }
    });
});