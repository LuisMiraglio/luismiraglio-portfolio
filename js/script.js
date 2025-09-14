// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar animaciones AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Función para detectar sección activa durante el scroll
  const navLinksScroll = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  
  function highlightNavOnScroll() {
    let scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinksScroll.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  // Activar la primera sección por defecto (si existe)
  if (navLinksScroll.length > 0) {
    navLinksScroll[0].classList.add('active');
  }
  
  // Escuchar evento de scroll
  window.addEventListener('scroll', highlightNavOnScroll);
  
  // Inicializar Particles.js
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {"value": 60,"density": {"enable": true,"value_area": 800}},
        "color": {"value": "#ffffff"},
        "shape": {"type": "circle","stroke": {"width": 0,"color": "#000000"},"polygon": {"nb_sides": 5}},
        "opacity": {"value": 0.2,"random": true,"anim": {"enable": true,"speed": 1,"opacity_min": 0.1,"sync": false}},
        "size": {"value": 3,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},
        "line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.2,"width": 1},
        "move": {"enable": true,"speed": 2,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": false,"mode": "push"},"resize": true},
        "modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0.6}}}
      },
      "retina_detect": true
    });
  }

  // Navegación - Menú hamburguesa para móviles
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Cierra el menú al hacer click en un enlace
  const navLinksMenu = document.querySelectorAll('.nav-link');
  navLinksMenu.forEach(link => {
    link.addEventListener('click', function() {
      if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // Cambio de color de la navbar al hacer scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Formulario de contacto mejorado
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Ocultar mensajes anteriores (si existen)
      const ok = document.querySelector('.form-success');
      const err = document.querySelector('.form-error');
      if (ok) ok.style.display = 'none';
      if (err) err.style.display = 'none';
      
      // Simulación de envío de formulario
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }
      
      // Simulación de tiempo de envío
      setTimeout(function() {
        const success = Math.random() > 0.2; // 80% éxito demo
        if (success) {
          if (ok) ok.style.display = 'flex';
          contactForm.reset();
        } else {
          if (err) err.style.display = 'flex';
        }
        // Restaurar botón
        setTimeout(function() {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        }, 3000);
      }, 1500);
    });
  }

  /* ===========================================================
     PROYECTOS — tarjetas clickeables (delegación y accesibilidad)
     =========================================================== */
  const projectsGrid = document.querySelector('.projects-grid');

  if (projectsGrid) {
    // Click en cualquier parte de la tarjeta abre el modal
    projectsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card[data-modal]');
      if (!card) return;
      openModal(card.dataset.modal);
    });
  }

  // Soporte teclado (Enter / Space) para cada tarjeta
  document.querySelectorAll('.project-card[data-modal]').forEach(card => {
    // Por si el HTML no lo trae, garantizamos focusabilidad
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
    if (!card.hasAttribute('role')) card.setAttribute('role', 'button');

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.modal);
      }
    });
  });

  /* ===========================================================
     MODALES v2 — orden, navegación y lightbox
     =========================================================== */
  // Orden de modales para navegación con flechas
  modalOrder = Array.from(document.querySelectorAll('.modal')).map(m => m.id);

  // Lightbox simple para las imágenes de galería del modal
  if (!document.querySelector('.lightbox')) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<img alt="" />';
    document.body.appendChild(lb);

    lb.addEventListener('click', () => lb.classList.remove('open'));

    document.addEventListener('click', (e)=>{
      const img = e.target.closest('.modal-gallery img');
      if(img){
        lb.querySelector('img').src = img.src;
        lb.classList.add('open');
      }
    });
  }

  // Botones de navegación dentro del modal
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.modal-close')){
      const m = e.target.closest('.modal'); if(m) closeModal(m.id);
    }
    if(e.target.hasAttribute('data-modal-next')) goNextModal();
    if(e.target.hasAttribute('data-modal-prev')) goPrevModal();
  });
});

// Mostrar imagen de perfil con fade-in si está disponible
window.addEventListener('load', function() {
  const profileImg = document.querySelector('.profile-image img');
  const placeholder = document.querySelector('.profile-placeholder');
  
  if (profileImg && !profileImg.style.display) {
    profileImg.style.opacity = '1';
    if (placeholder) {
      placeholder.style.display = 'none';
    }
  }
});

/* ===========================================================
   MODALES v2 — accesibles, con navegación y foco atrapado
   Sustituye las funciones simples antiguas por estas
   =========================================================== */
let lastFocused = null;
let activeModal = null;
let modalOrder = []; // se rellena en DOMContentLoaded

function trapFocus(e){
  if(!activeModal) return;
  const focusables = activeModal.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  if(!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if(e.key === 'Tab'){
    if(e.shiftKey && document.activeElement === first){
      e.preventDefault(); last.focus();
    }else if(!e.shiftKey && document.activeElement === last){
      e.preventDefault(); first.focus();
    }
  }
}

function onKeydown(e){
  if(!activeModal) return;
  if(e.key === 'Escape'){ closeModal(activeModal.id); }
  if(e.key === 'ArrowRight'){ goNextModal(); }
  if(e.key === 'ArrowLeft'){ goPrevModal(); }
}

function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;

  lastFocused = document.activeElement;
  activeModal = el;

  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  el.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Evita scroll de fondo

  // Foco al título o al botón cerrar
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

function goNextModal(){
  if(!activeModal || !modalOrder.length) return;
  const i = modalOrder.indexOf(activeModal.id);
  const next = modalOrder[(i + 1) % modalOrder.length];
  closeModal(activeModal.id); openModal(next);
}

function goPrevModal(){
  if(!activeModal || !modalOrder.length) return;
  const i = modalOrder.indexOf(activeModal.id);
  const prev = modalOrder[(i - 1 + modalOrder.length) % modalOrder.length];
  closeModal(activeModal.id); openModal(prev);
}

// Cerrar al hacer click fuera del contenido
window.addEventListener('click', function(event) {
  document.querySelectorAll('.modal.open').forEach(function(modal) {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
});
