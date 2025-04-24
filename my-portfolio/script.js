// Smooth scroll effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Adding fade-in effect to sections when they are in view
  const sections = document.querySelectorAll('.container');
  
  const observerOptions = {
    root: null, // observe relative to viewport
    threshold: 0.2 // trigger when 20% of the section is visible
  };
  
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      } else {
        entry.target.classList.remove('fade-in-visible');
      }
    });
  }, observerOptions);
  
  // Observe each section
  sections.forEach(section => {
    fadeInObserver.observe(section);
  });
  
  // Add a 'fade-in-visible' class when an element is in the viewport
  document.addEventListener('DOMContentLoaded', () => {
    const styles = document.createElement('style');
    styles.innerHTML = `
      .fade-in-visible {
        animation: fadeIn 1s ease-in-out;
      }
    `;
    document.head.appendChild(styles);
  });
  