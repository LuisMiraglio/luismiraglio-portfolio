// ============================
// Arranque
// ============================
document.addEventListener('DOMContentLoaded', function () {
  // AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // ============================
  // Nav: resaltar sección activa
  // ============================
  const navLinksScroll = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinksScroll.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  if (navLinksScroll.length > 0) {
    navLinksScroll[0].classList.add('active');
  }
  window.addEventListener('scroll', highlightNavOnScroll);

  // ============================
  // Particles.js — “galaxia”
  // y FIX para cubrir TODO el hero
  // ============================
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer) {
    // Asegura que el hero sea el contenedor relativo del overlay
    const hero = particlesContainer.closest('.hero') || document.querySelector('.hero');
    if (hero && getComputedStyle(hero).position === 'static') {
      hero.style.position = 'relative';
    }

    // Estirar el overlay dentro del hero
    Object.assign(particlesContainer.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      zIndex: '0',
      pointerEvents: 'none' // que no bloquee clics
    });

    // Inicializar particles.js
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 160,
          "density": { "enable": true, "value_area": 1400 }
        },
        "color": { "value": ["#ffffff", "#93c5fd", "#38bdf8"] },
        "shape": { "type": "circle" },
        "opacity": {
          "value": 0.6,
          "random": true,
          "anim": { "enable": true, "speed": 1, "opacity_min": 0.2 }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": { "enable": true, "speed": 2, "size_min": 0.5 }
        },
        "line_linked": {
          "enable": true,
          "distance": 180,
          "color": "#93c5fd",
          "opacity": 0.15,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": { "distance": 200, "line_linked": { "opacity": 0.3 } },
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });

    // Reajuste en resize por si el hero cambia de alto
    const resizeParticles = () => {
      // particles.js maneja el canvas internamente, pero forzamos height al contenedor
      particlesContainer.style.height = hero ? hero.offsetHeight + 'px' : '100%';
    };
    resizeParticles();
    window.addEventListener('resize', resizeParticles);
  }

  // ============================
  // Menú hamburguesa móvil
  // ============================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Cierra el menú al hacer click en un enlace
  const navLinksMenu = document.querySelectorAll('.nav-link');
  navLinksMenu.forEach(link => {
    link.addEventListener('click', function () {
      if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // Navbar con fondo al scrollear
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // ============================
  // Formulario de contacto (demo)
  // ============================
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const ok = document.querySelector('.form-success');
      const err = document.querySelector('.form-error');
      if (ok) ok.style.display = 'none';
      if (err) err.style.display = 'none';

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }

      setTimeout(function () {
        const success = Math.random() > 0.2; // 80% éxito demo
        if (success) {
          if (ok) ok.style.display = 'flex';
          contactForm.reset();
        } else {
          if (err) err.style.display = 'flex';
        }
        setTimeout(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        }, 3000);
      }, 1500);
    });
  }

  // ============================
  // PROYECTOS — tarjetas clickeables
  // ============================
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    projectsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card[data-modal]');
      if (!card) return;
      openModal(card.dataset.modal);
    });
  }

  // Accesibilidad con teclado
  document.querySelectorAll('.project-card[data-modal]').forEach(card => {
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
    if (!card.hasAttribute('role')) card.setAttribute('role', 'button');

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.modal);
      }
    });
  });

  // ============================
  // Lightbox simple para modales
  // ============================
  if (!document.querySelector('.lightbox')) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<img alt="" />';
    document.body.appendChild(lb);

    lb.addEventListener('click', () => lb.classList.remove('open'));

    document.addEventListener('click', (e) => {
      const img = e.target.closest('.modal-gallery img');
      if (img) {
        lb.querySelector('img').src = img.src;
        lb.classList.add('open');
      }
    });
  }

  // Nav de modales (prev/next) + cerrar
  document.addEventListener('click', (e) => {
    if (e.target.matches('.modal-close')) {
      const m = e.target.closest('.modal');
      if (m) closeModal(m.id);
    }
    if (e.target.hasAttribute('data-modal-next')) goNextModal();
    if (e.target.hasAttribute('data-modal-prev')) goPrevModal();
  });

  // Armar orden de modales
  modalOrder = Array.from(document.querySelectorAll('.modal')).map(m => m.id);
});

// ============================
// Imagen perfil (fade-in)
// ============================
window.addEventListener('load', function () {
  const profileImg = document.querySelector('.profile-image img');
  const placeholder = document.querySelector('.profile-placeholder');
  if (profileImg && !profileImg.style.display) {
    profileImg.style.opacity = '1';
    if (placeholder) placeholder.style.display = 'none';
  }
});

// ============================
// MODALES v2 — accesibles
// ============================
let lastFocused = null;
let activeModal = null;
let modalOrder = [];

function trapFocus(e) {
  if (!activeModal) return;
  const focusables = activeModal.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }
}

function onKeydown(e) {
  if (!activeModal) return;
  if (e.key === 'Escape') { closeModal(activeModal.id); }
  if (e.key === 'ArrowRight') { goNextModal(); }
  if (e.key === 'ArrowLeft') { goPrevModal(); }
}

function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;

  lastFocused = document.activeElement;
  activeModal = el;

  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  el.style.display = 'block';
  document.body.style.overflow = 'hidden';

  const focusTarget = el.querySelector('.modal-header h2') || el.querySelector('.modal-close');
  if (focusTarget && focusTarget.focus) focusTarget.focus();

  document.addEventListener('keydown', onKeydown);
  document.addEventListener('keydown', trapFocus);
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');
  el.style.display = 'none';
  document.body.style.overflow = '';
  activeModal = null;

  document.removeEventListener('keydown', onKeydown);
  document.removeEventListener('keydown', trapFocus);

  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

function goNextModal() {
  if (!activeModal || !modalOrder.length) return;
  const i = modalOrder.indexOf(activeModal.id);
  const next = modalOrder[(i + 1) % modalOrder.length];
  closeModal(activeModal.id); openModal(next);
}

function goPrevModal() {
  if (!activeModal || !modalOrder.length) return;
  const i = modalOrder.indexOf(activeModal.id);
  const prev = modalOrder[(i - 1 + modalOrder.length) % modalOrder.length];
  closeModal(activeModal.id); openModal(prev);
}

// Cerrar al click fuera del contenido
window.addEventListener('click', function (event) {
  document.querySelectorAll('.modal.open').forEach(function (modal) {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
});
