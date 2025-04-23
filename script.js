// Smooth scroll for older browsers
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form validation + message
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields before submitting.');
    } else {
      e.preventDefault(); // You can remove this if connected to a backend
      alert(`Thanks, ${name}! Your message has been sent.`);
      this.reset(); // Clear the form
    }
  });