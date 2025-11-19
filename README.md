# TekoLink Website

TekoLink is a small business tech startup website demonstrating web design, app development services, tech support, a gallery, enquiries, and contact functionality.

# Student Information
- **Student Name:** Mojalefa Kabelo  
- **Student Number:** ST10496962  
- **Year:** 2025  

# Website Goals and Objectives

This project represents **TekoLink Innovations**, a tech startup focused on bridging the digital divide between rural and urban communities.  
It was created as part of a web development POE to demonstrate modern web development skills.

# Technologies Used
- HTML5  
- CSS3  
- JavaScript  
- Google Maps API (Embed)
- FormSubmit.co (Email processing)

## Author
Created by **Kabelo Mojalefa (2025)**

## Functionality
- Fully responsive design  
- Navigation menu linking all pages  
- Enquiry and Contact forms with JavaScript validation  
- Smooth scrolling and animations  
- SEO-friendly structure  
- Lightbox gallery  
- Dropdown options on services  
- Google Maps integration  
- Dynamic real-time content  
- Search feature  
- Clean, modern visual design  

# Project Structure
/index.html
/pages
about.html
services.html
gallery.html
contact.html
enquiry.html
/js
scripts.js
form-validation.js
/css
styles.css
/assets
/images
README.md

# Form Validation & Processing

## Enquiry Form Features
- **Real-time validation** on field blur and input
- **Custom validation rules**:
  - Name: Minimum 2 characters
  - Email: Valid email format verification
  - Enquiry Type: Required selection
  - Message: Minimum 10 characters
- **Visual feedback** with success/error states
- **Email processing** via FormSubmit.co service
- **User feedback** with success/error messages
- **Form reset** after successful submission

## Contact Form Features
- **JavaScript input validation** for all required fields
- **Email format verification** with regex validation
- **Message length validation** (minimum 10 characters)
- **Email recipient processing** to info@TekoLink.co.za
- **Instant user feedback** with smooth scrolling to messages
- **Form state management** with disabled submit buttons during processing

## Form Validation Implementation
- **External JavaScript class** (`form-validation.js`) for reusable validation logic
- **Real-time field validation** with visual error indicators
- **Custom error messages** for each field type
- **Success states** for valid fields
- **FormSubmit.co integration** for reliable email delivery
- **Fallback error handling** with alternative contact methods

# Timeline & Milestones

### Milestone 1
- Basic layout created  
- Initial HTML structure  

### Milestone 2
- Navigation bar redesigned and centralized  
- Full responsive CSS added  

### Milestone 3
- JavaScript dropdown + modals added  
- Gallery lightbox system created  

### Milestone 4
- Search bar implemented  
- Real-time footer and dynamic content  

### Milestone 5
- SEO meta tags, titles, improved alt text  

### Milestone 6
- Forms validation and email submission completed  

### Milestone 7
- README and Documentation finalized  

# Changelog

## 🚀 Latest Improvements

### Navigation & Layout
- **Removed repeated navigation bars** on each page - Consolidated into single, reusable component
- **Centralized CSS structure** - Unified styling across all pages for consistency
- **Enhanced responsive design** - Improved mobile and tablet layouts for better user experience

### User Interface & Features
- **Service dropdown options** - Added filtering system for service categories
- **Gallery lightbox implementation** - Interactive image viewing with navigation controls
- **Google Maps integration** - Embedded location map with business address
- **Search functionality** - Site-wide search system across all pages
- **Dynamic date/time elements** - Real-time clock and visit counter on homepage

### Form Systems & Validation
- **Enquiry form validation** - Complete JavaScript validation with real-time feedback
- **Contact form validation** - Input validation and email processing integration
- **FormSubmit.co integration** - Reliable email delivery system for form submissions

### Technical Enhancements
- **SEO optimization** - Added comprehensive meta tags and structured data
- **Image optimization** - Renamed all images with SEO-friendly filenames
- **Code organization** - Multiple Git commits tracking progressive development
- **Documentation updates** - Comprehensive README with project specifications

## 📊 Development Progress

### Phase 1: Foundation Setup
- Established project structure and file organization
- Implemented basic page templates and navigation
- Set up responsive CSS framework

### Phase 2: Core Features
- Developed service pages with interactive elements
- Implemented form systems with validation
- Added gallery and media components

### Phase 3: Enhancement & Polish
- Integrated third-party services (Google Maps, FormSubmit)
- Added advanced JavaScript functionality
- Optimized for performance and SEO

### Phase 4: Final Touches
- Comprehensive testing across devices
- Code refactoring and optimization
- Documentation completion

## 🔧 Technical Details

### Code Improvements
- **CSS Refactoring**: Consolidated duplicate styles into modular components
- **JavaScript Optimization**: Implemented reusable validation classes
- **Performance**: Optimized image loading and page speed
- **Accessibility**: Enhanced focus states and keyboard navigation

### Feature Implementation
- **Form Validation**: Real-time input checking with user feedback
- **Interactive Elements**: Modals, accordions, and lightbox systems
- **Search System**: Page-specific search functionality
- **Dynamic Content**: Live updates and interactive components

## 📈 Version History

### v1.0 - Current Release
- All core features implemented and tested
- Responsive design completed
- Form systems fully functional
- SEO optimization in place

### v0.9 - Feature Complete
- Basic functionality across all pages
- Initial form implementations
- Navigation system established

### v0.8 - Foundation
- Project structure setup
- Basic styling and layout
- Initial page templates

## 🎯 Achievement Summary

- **6 Fully Functional Pages** with consistent design
- **2 Complete Form Systems** with validation and email processing
- **Responsive Design** working across all device sizes
- **SEO Optimized** with proper meta tags and structure
- **Interactive Elements** including search, modals, and lightbox
- **Professional Documentation** with comprehensive README

---

*This changelog documents the iterative development process of the TekoLink website, highlighting feature implementations, technical improvements, and project milestones achieved throughout the development cycle.*
## Interactive Google Map Implementation

### Purpose
- Provide visual location of TekoLink Innovations
- Enable customers to easily find our physical address
- Enhance user experience with interactive mapping

### Implementation Details
- **Technology Used**: Google Maps Embed API
- **Location**: 7 Mokolo Street, Polokwane, Limpopo
- **Coordinates**: -23.934994, 29.441693
- **Features**: 
  - Interactive zoom and pan
  - Street view capability
  - Mobile-responsive design
  - Accessibility features (title attribute)

### Code Implementation
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.123456789012!2d29.441693!3d-23.934994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU2JzA2LjAiUyAyOcKwMjYnMzAuMSJF!5e0!3m2!1sen!2sza!4v1234567890" 
    width="100%" 
    height="400" 
    style="border:0; border-radius: 8px;" 
    allowfullscreen 
    loading="lazy"
    title="TekoLink Innovations Location">
</iframe>

# How To Run
1. Download or clone the repository  
2. Open `index.html` in any browser  
3. Navigate using the top navigation menu  
4. JavaScript will automatically load from `/pages/js/scripts.js`

---

# References 

Google Developers. (2024) *Google Maps Embed API documentation*. Available at: https://developers.google.com/maps/documentation/embed (Accessed: 18 November 2024).

MDN Web Docs. (2024) *HTML forms — Learn web development*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms (Accessed: 18 November 2024).

MDN Web Docs. (2024) *Using the meta tag for SEO*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta (Accessed: 18 November 2024).

W3Schools. (2024) *How to create a hero image*. Available at: https://www.w3schools.com/howto/howto_css_hero_image.asp (Accessed: 18 November 2024).

W3Schools. (2024) *CSS font properties*. Available at: https://www.w3schools.com/css/css_font.asp (Accessed: 18 November 2024).

W3Schools. (2024) *CSS navigation bar*. Available at: https://www.w3schools.com/css/css_navbar.asp (Accessed: 18 November 2024).

W3Schools. (2024) *CSS links styling*. Available at: https://www.w3schools.com/css/css_link.asp (Accessed: 18 November 2024).

W3Schools. (2024) *JavaScript DOM event handling*. Available at: https://www.w3schools.com/js/js_htmldom_events.asp (Accessed: 18 November 2024).

FormSubmit. (2024) *Email form processing documentation*. Available at: https://formsubmit.co/ (Accessed: 18 November 2024).
