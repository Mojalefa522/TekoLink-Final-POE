// DOM elements
const gallery = document.querySelector('.gallery');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImageIndex = 0;

// Generate gallery items
function generateGallery() {
    gallery.innerHTML = '';
    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}" data-index="${index}">
            <div class="image-title">${item.title}</div>
        `;
        gallery.appendChild(galleryItem);
    });
    
    // Add click event listeners to gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', openModal);
    });
}

// Open modal with clicked image
function openModal(e) {
    const clickedImage = e.currentTarget.querySelector('img');
    currentImageIndex = parseInt(clickedImage.getAttribute('data-index'));
    updateModal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Update modal content
function updateModal() {
    const currentImage = galleryData[currentImageIndex];
    modalImage.src = currentImage.src;
    modalTitle.textContent = currentImage.title;
}

// Close modal
function closeModalFunc() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Navigate to previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    updateModal();
}

// Navigate to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    updateModal();
}

// Keyboard navigation
function handleKeyDown(e) {
    if (!modal.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeModalFunc();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
}

// Event listeners
closeModal.addEventListener('click', closeModalFunc);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
document.addEventListener('keydown', handleKeyDown);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Initialize gallery
generateGallery();
// Gallery Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-caption"></div>
            <button class="lightbox-nav lightbox-prev">&#10094;</button>
            <button class="lightbox-nav lightbox-next">&#10095;</button>
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentImageIndex = 0;
    let images = [];

    // Get all gallery images
    function initGallery() {
        images = Array.from(document.querySelectorAll('.gallery-img'));
        
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                openLightbox(index);
            });
            
            // Add keyboard accessibility
            img.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    openLightbox(index);
                }
            });
            
            img.setAttribute('tabindex', '0');
            img.setAttribute('role', 'button');
            img.setAttribute('aria-label', `View larger version of ${img.alt}`);
        });
    }

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        closeBtn.focus();
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Update lightbox image
    function updateLightboxImage() {
        const img = images[currentImageIndex];
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = img.getAttribute('data-caption') || img.alt;
    }

    // Navigate to next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Navigate to previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });

    // Close when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Initialize gallery
    initGallery();
});