// form-validation.js - With browser validation disabled
class FormValidator {
    constructor() {
        this.initializeForms();
    }

    initializeForms() {
        // Initialize enquiry form
        const enquiryForm = document.getElementById('enquiry-form');
        if (enquiryForm) {
            this.setupForm(enquiryForm, 'enquiry');
        }

        // Initialize contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            this.setupForm(contactForm, 'contact');
        }
    }

    setupForm(form, formType) {
        const submitBtn = form.querySelector('input[type="submit"]');
        
        // Disable browser default validation completely
        form.setAttribute('novalidate', 'true');
        
        // Real-time validation
        this.setupRealTimeValidation(form);
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Prevent any browser default validation
            e.stopImmediatePropagation();
            
            if (this.validateForm(form)) {
                this.processForm(form, submitBtn, formType);
            }
        });
    }

    setupRealTimeValidation(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Remove any browser validation attributes that might cause popups
            input.removeAttribute('oninvalid');
            input.removeAttribute('oninput');
            
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
                // Clear any custom validity
                input.setCustomValidity('');
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        
        this.clearFieldError(field);

        // Clear any browser validation message
        field.setCustomValidity('');

        // Skip validation if field is not required and empty
        if (!field.hasAttribute('required') && !value) {
            return true;
        }

        switch(fieldName) {
            case 'name':
                if (!value) {
                    this.showFieldError(field, 'Please enter your full name');
                    return false;
                }
                if (value.length < 2) {
                    this.showFieldError(field, 'Name must be at least 2 characters long');
                    return false;
                }
                break;
                
            case 'email':
                if (!value) {
                    this.showFieldError(field, 'Please enter your email address');
                    return false;
                }
                if (!this.isValidEmail(value)) {
                    this.showFieldError(field, 'Please enter a valid email address');
                    return false;
                }
                break;
                
            case 'type':
                if (!value) {
                    this.showFieldError(field, 'Please select an enquiry type');
                    return false;
                }
                break;
                
            case 'message':
                if (!value) {
                    this.showFieldError(field, 'Please enter your message');
                    return false;
                }
                if (value.length < 10) {
                    this.showFieldError(field, 'Message must be at least 10 characters long');
                    return false;
                }
                break;
        }
        
        field.classList.add('success');
        return true;
    }

    validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        if (!isValid) {
            this.showFeedback('Please fix the errors in the form', 'error');
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        field.classList.remove('success');
        
        const errorElement = document.getElementById(field.name + 'Error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        field.classList.remove('success');
        
        const errorElement = document.getElementById(field.name + 'Error');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFeedback(message, type = 'success') {
        const feedbackElement = document.getElementById('form-feedback');
        if (feedbackElement) {
            feedbackElement.textContent = message;
            feedbackElement.className = `feedback-message feedback-${type}`;
            feedbackElement.style.display = 'block';
            
            // Scroll to feedback message
            feedbackElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Hide after 5 seconds for success messages
            if (type === 'success') {
                setTimeout(() => {
                    feedbackElement.style.display = 'none';
                }, 5000);
            }
        }
    }

    async processForm(form, submitBtn, formType) {
        const originalText = submitBtn.value;
        
        // Disable submit button
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Use FormSubmit.co service
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                const successMessage = formType === 'enquiry' 
                    ? 'Thank you! Your enquiry has been sent successfully. We will get back to you within 24 hours.'
                    : 'Thank you! Your message has been sent successfully. We will respond as soon as possible.';
                
                this.showFeedback(successMessage, 'success');
                form.reset();
                
                // Clear all success classes
                const inputs = form.querySelectorAll('input, textarea, select');
                inputs.forEach(input => this.clearFieldError(input));
                
            } else {
                throw new Error('Network response was not ok');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            const errorMessage = formType === 'enquiry'
                ? 'Sorry, there was an error sending your enquiry. Please try again or email us directly at info@TekoLink.co.za'
                : 'Sorry, there was an error sending your message. Please try again or call us directly at 066 550 1596';
            
            this.showFeedback(errorMessage, 'error');
        } finally {
            // Re-enable submit button
            submitBtn.value = originalText;
            submitBtn.disabled = false;
        }
    }
}

// Initialize form validation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FormValidator();
});