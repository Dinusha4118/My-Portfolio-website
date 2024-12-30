// Initialize AOS animations
AOS.init({
    duration: 1200,
    once: true,
  });
  
 
  // Initialize AOS animations
AOS.init({
    duration: 1200,
    once: true,
  });
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // EmailJS Integration
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    emailjs.send('service_owpzq6h', 'template_vjkrh2v', {
      name,
      email,
      message,
    })
    .then(() => {
      alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again later.');
      });
      
    });
 
  