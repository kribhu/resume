// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // In a real application, you would send this data to a server
  console.log('Form submitted:', { name, email, message });
  
  // Show success message
  alert('Thank you for your message. I will get back to you soon!');
  
  // Reset the form
  contactForm.reset();
});

// Theme toggle (although we're only using dark mode as per requirements)
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
  alert('This resume is designed to showcase a professional dark theme as requested.');
});