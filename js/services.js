// services.js - Minimal working version
console.log('Services.js loaded');

// Simple modal function
function openModal(button, modalClass) {
    const serviceBox = button.closest('.service-box');
    const modal = serviceBox.querySelector(modalClass);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Simple close function
function closeModal(button) {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing services page');
    
    // Service Filter
    const filter = document.getElementById('serviceFilter');
    if (filter) {
        filter.addEventListener('change', function() {
            const value = this.value;
            document.querySelectorAll('.service-box').forEach(box => {
                box.style.display = (value === 'all' || box.dataset.type === value) ? 'block' : 'none';
            });
        });
    }
    
    // Info buttons
    document.querySelectorAll('.info-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openModal(this, '.info-modal');
        });
    });
    
    // Price buttons
    document.querySelectorAll('.price-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openModal(this, '.price-modal');
        });
    });
    
    // Contact buttons
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openModal(this, '.contact-modal');
        });
    });
    
    // Close buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal(this);
        });
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
    
    // Accordion
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        });
    });
});

// Search function
function toggleSearch() {
    const term = prompt("Search services:");
    if (term) {
        const boxes = document.querySelectorAll('.service-box');
        let found = false;
        
        boxes.forEach(box => {
            const matches = box.dataset.keywords.includes(term.toLowerCase()) || 
                           box.querySelector('h3').textContent.toLowerCase().includes(term.toLowerCase());
            box.style.display = matches ? 'block' : 'none';
            if (matches) found = true;
        });
        
        if (!found) {
            alert('No services found');
            boxes.forEach(box => box.style.display = 'block');
        }
    }
}