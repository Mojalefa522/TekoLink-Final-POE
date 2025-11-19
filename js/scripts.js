document.addEventListener('DOMContentLoaded', () => {
  // ========== NAVBAR HAMBURGER ==========
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('show');
    });

    // Close menu after clicking a link
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('show');
      });
    });
  }

  // ========== GALLERY LIGHTBOX ==========
  const zoomableImages = document.querySelectorAll('.service-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  if (lightbox && lightboxImg && zoomableImages.length > 0) {
    zoomableImages.forEach((img) => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('show');
    });
  }
});
// Service Filter and Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Service Filter
    const serviceFilter = document.getElementById('serviceFilter');
    const serviceBoxes = document.querySelectorAll('.service-box');
    
    console.log('Service filter initialized');
    console.log('Filter element:', serviceFilter);
    console.log('Service boxes found:', serviceBoxes.length);
    
    if (serviceFilter && serviceBoxes.length > 0) {
        serviceFilter.addEventListener('change', function() {
            const selectedValue = this.value;
            console.log('Filter changed to:', selectedValue);
            
            serviceBoxes.forEach(box => {
                if (selectedValue === 'all' || box.getAttribute('data-type') === selectedValue) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }

    // Modal functionality for service buttons
    const infoButtons = document.querySelectorAll('.info-btn');
    const priceButtons = document.querySelectorAll('.price-btn');
    const contactButtons = document.querySelectorAll('.contact-btn');
    const closeButtons = document.querySelectorAll('.close-btn');

    console.log('Info buttons:', infoButtons.length);
    console.log('Price buttons:', priceButtons.length);
    console.log('Contact buttons:', contactButtons.length);

    // Info buttons
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.parentElement.querySelector('.info-modal');
            console.log('Info button clicked, modal:', modal);
            if (modal) modal.style.display = 'block';
        });
    });

    // Price buttons
    priceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.parentElement.querySelector('.price-modal');
            console.log('Price button clicked, modal:', modal);
            if (modal) modal.style.display = 'block';
        });
    });

    // Contact buttons
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.parentElement.querySelector('.contact-modal');
            console.log('Contact button clicked, modal:', modal);
            if (modal) modal.style.display = 'block';
        });
    });

    // Close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            console.log('Close button clicked, modal:', modal);
            if (modal) modal.style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            console.log('Clicked outside modal');
            e.target.style.display = 'none';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            console.log('Escape key pressed');
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    console.log('Accordion headers:', accordionHeaders.length);
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            console.log('Accordion clicked');
            content.classList.toggle('active');
        });
    });
});
// Global Search Function - for all pages
function toggleSearch() {
    console.log('Search button clicked');
    
    // If we're on the services page, use the services search
    if (window.location.pathname.includes('service.html') || 
        window.location.pathname.includes('services.html')) {
        
        const searchTerm = prompt("Enter service to search for:");
        if (searchTerm && searchTerm.trim() !== '') {
            searchServices(searchTerm.toLowerCase());
        }
    } 
    // For other pages, use a general search
    else {
        const searchTerm = prompt("What are you looking for?");
        if (searchTerm && searchTerm.trim() !== '') {
            alert("Search functionality for this page is coming soon! You searched for: " + searchTerm);
            // You can add page-specific search logic here later
        }
    }
}

// Services page specific search function
function searchServices(searchTerm) {
    console.log('Searching services for:', searchTerm);
    const serviceBoxes = document.querySelectorAll('.service-box');
    let foundResults = false;

    // First, show all boxes
    serviceBoxes.forEach(box => {
        box.style.display = 'block';
        box.style.border = '1px solid #ddd';
    });

    serviceBoxes.forEach(box => {
        const keywords = box.dataset.keywords ? box.dataset.keywords.toLowerCase() : '';
        const serviceName = box.querySelector('h3').textContent.toLowerCase();
        
        const matches = keywords.includes(searchTerm) || serviceName.includes(searchTerm);
        
        if (matches) {
            box.style.border = '2px solid #3498db';
            foundResults = true;
            console.log('Found match:', serviceName);
        } else {
            box.style.display = 'none';
        }
    });

    if (!foundResults) {
        alert('No services found matching: ' + searchTerm);
        // Reset all boxes
        serviceBoxes.forEach(box => {
            box.style.display = 'block';
            box.style.border = '1px solid #ddd';
        });
    }
}
// Global Search Function for all pages
function toggleSearch() {
    const searchTerm = prompt("What are you looking for?");
    if (searchTerm && searchTerm.trim() !== '') {
        
        // Get current page name
        const currentPage = getCurrentPage();
        
        // Route to appropriate search function
        switch(currentPage) {
            case 'services':
                searchServices(searchTerm);
                break;
            case 'gallery':
                searchGallery(searchTerm);
                break;
            case 'about':
                searchAbout(searchTerm);
                break;
            case 'contact':
                searchContact(searchTerm);
                break;
            case 'enquiry':
                searchEnquiry(searchTerm);
                break;
            case 'home':
                searchHome(searchTerm);
                break;
            default:
                alert("You searched for: '" + searchTerm + "'\n\nDetailed search for this page is coming soon!");
        }
    }
}

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('service.html')) return 'services';
    if (path.includes('gallery.html')) return 'gallery';
    if (path.includes('about.html')) return 'about';
    if (path.includes('contact.html')) return 'contact';
    if (path.includes('enquiry.html')) return 'enquiry';
    if (path.includes('index.html') || path.endsWith('/')) return 'home';
    return 'unknown';
}

// ===== PAGE-SPECIFIC SEARCH FUNCTIONS =====

// Services page search (you already have this)
function searchServices(term) {
    const serviceBoxes = document.querySelectorAll('.service-box');
    let foundResults = false;

    serviceBoxes.forEach(box => {
        const keywords = box.dataset.keywords ? box.dataset.keywords.toLowerCase() : '';
        const serviceName = box.querySelector('h3').textContent.toLowerCase();
        
        const matches = keywords.includes(term.toLowerCase()) || serviceName.includes(term.toLowerCase());
        
        if (matches) {
            box.style.display = 'block';
            box.style.border = '2px solid #3498db';
            foundResults = true;
        } else {
            box.style.display = 'none';
            box.style.border = '1px solid #ddd';
        }
    });

    if (!foundResults) {
        alert('No services found matching: ' + term);
        serviceBoxes.forEach(box => {
            box.style.display = 'block';
            box.style.border = '1px solid #ddd';
        });
    }
}

// Gallery page search - search image captions/alt text
function searchGallery(term) {
    const images = document.querySelectorAll('.gallery-img, .gallery-image');
    let found = false;
    
    images.forEach(img => {
        const altText = img.alt.toLowerCase();
        const caption = img.getAttribute('data-caption') || '';
        
        if (altText.includes(term.toLowerCase()) || caption.toLowerCase().includes(term.toLowerCase())) {
            img.style.border = '3px solid #3498db';
            img.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
        } else {
            img.style.border = 'none';
        }
    });
    
    if (!found) {
        alert('No gallery items found matching: ' + term);
        images.forEach(img => img.style.border = 'none');
    }
}

// About page search - search team members and content
function searchAbout(term) {
    const members = document.querySelectorAll('.member, .team-member');
    const headings = document.querySelectorAll('h1, h2, h3, h4');
    let found = false;
    
    // Search team members
    members.forEach(member => {
        const text = member.textContent.toLowerCase();
        if (text.includes(term.toLowerCase())) {
            member.style.backgroundColor = '#e8f4fd';
            member.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
        } else {
            member.style.backgroundColor = '';
        }
    });
    
    // Search headings
    headings.forEach(heading => {
        if (heading.textContent.toLowerCase().includes(term.toLowerCase())) {
            heading.style.color = '#3498db';
            found = true;
        }
    });
    
    if (!found) {
        alert('No content found matching: ' + term);
        members.forEach(member => member.style.backgroundColor = '');
        headings.forEach(heading => heading.style.color = '');
    }
}

// Contact page search - search contact methods
function searchContact(term) {
    const contactItems = document.querySelectorAll('p, li, .contact-info');
    let found = false;
    
    contactItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(term.toLowerCase())) {
            item.style.backgroundColor = '#e8f4fd';
            item.style.padding = '5px';
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
        } else {
            item.style.backgroundColor = '';
            item.style.padding = '';
        }
    });
    
    if (!found) {
        alert('No contact information found matching: ' + term);
        contactItems.forEach(item => {
            item.style.backgroundColor = '';
            item.style.padding = '';
        });
    }
}

// Enquiry page search - search form sections
function searchEnquiry(term) {
    const labels = document.querySelectorAll('label, .form-group');
    let found = false;
    
    labels.forEach(label => {
        const text = label.textContent.toLowerCase();
        if (text.includes(term.toLowerCase())) {
            label.style.backgroundColor = '#e8f4fd';
            label.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
        } else {
            label.style.backgroundColor = '';
        }
    });
    
    if (!found) {
        alert('No form sections found matching: ' + term);
        labels.forEach(label => label.style.backgroundColor = '');
    }
}

// Home page search - search main content
function searchHome(term) {
    const sections = document.querySelectorAll('.hero, .service, .feature');
    const headings = document.querySelectorAll('h1, h2, h3');
    let found = false;
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(term.toLowerCase())) {
            section.style.border = '2px solid #3498db';
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
        }
    });
    
    headings.forEach(heading => {
        if (heading.textContent.toLowerCase().includes(term.toLowerCase())) {
            heading.style.color = '#3498db';
            found = true;
        }
    });
    
    if (!found) {
        alert('No content found matching: ' + term);
        sections.forEach(section => section.style.border = '');
        headings.forEach(heading => heading.style.color = '');
    }
}