/* ========================================
   Terreiro Nkosimuanda - Main JavaScript - SIMPLIFIED
   ======================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // ========================================
  // Mobile Menu Toggle - SIMPLIFIED
  // ========================================

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  }

  // ========================================
  // Active Navigation Link - SIMPLIFIED
  // ========================================

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      }
    });
  });

  // ========================================
  // Scroll Reveal Animations
  // ========================================

  const revealElements = document.querySelectorAll(
    '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-scale'
  );

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }

  // ========================================
  // Form Validation (Contact Page)
  // ========================================

  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      clearErrors();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById('message');

      let isValid = true;

      if (!name || !name.value.trim()) {
        if (name) showError(name, 'Por favor, insira seu nome');
        isValid = false;
      }

      if (!email || !email.value.trim()) {
        if (email) showError(email, 'Por favor, insira seu email');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, 'Por favor, insira um email válido');
        isValid = false;
      }

      if (!phone || !phone.value.trim()) {
        if (phone) showError(phone, 'Por favor, insira seu telefone');
        isValid = false;
      }

      if (!message || !message.value.trim()) {
        if (message) showError(message, 'Por favor, insira sua mensagem');
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError(message, 'A mensagem deve ter pelo menos 10 caracteres');
        isValid = false;
      }

      if (isValid) {
        showSuccessMessage();
        contactForm.reset();
      }
    });

    const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
      input.addEventListener('blur', function () {
        if (this.value.trim()) {
          this.classList.remove('error');
          const errorElement = this.nextElementSibling;
          if (errorElement && errorElement.classList.contains('form-error')) {
            errorElement.style.display = 'none';
          }
        }
      });
    });
  }

  // ========================================
  // Keyboard Navigation
  // ========================================

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });

  // ========================================
  // Helper Functions
  // ========================================

  function showError(input, message) {
    if (!input) return;
    input.classList.add('error');
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('form-error')) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  }

  function clearErrors() {
    const errorInputs = document.querySelectorAll('.form-input.error, .form-textarea.error');
    errorInputs.forEach(input => {
      input.classList.remove('error');
    });

    const errorMessages = document.querySelectorAll('.form-error');
    errorMessages.forEach(error => {
      error.style.display = 'none';
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: #25D366;
      color: white;
      padding: 20px 30px;
      border-radius: 8px;
      z-index: 10000;
    `;
    successDiv.innerHTML = `
      <strong>✓ Mensagem Enviada!</strong><br>
      Entraremos em contato em breve.
    `;

    document.body.appendChild(successDiv);

    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.remove();
      }
    }, 3000);
  }

});
