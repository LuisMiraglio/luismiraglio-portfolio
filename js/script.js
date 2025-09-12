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


// === Modales de Proyectos: Simple por ID ===
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Evita scroll de fondo
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'none';
  document.body.style.overflow = '';
}
// Cerrar al hacer click fuera del contenido
window.addEventListener('click', function(event) {
  document.querySelectorAll('.modal').forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = '';
    }
  });
});
