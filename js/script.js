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
    
    // Activar la primera sección por defecto
    navLinksScroll[0].classList.add('active');
    
    // Escuchar evento de scroll
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Inicializar Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.2,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.6
                        }
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Navegación - Menú hamburguesa para móviles
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Cierra el menú al hacer click en un enlace
    const navLinksMenu = document.querySelectorAll('.nav-link');
    navLinksMenu.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cambio de color de la navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
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
            
            // Ocultar mensajes anteriores
            document.querySelector('.form-success').style.display = 'none';
            document.querySelector('.form-error').style.display = 'none';
            
            // Simulación de envío de formulario
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            // Simulación de tiempo de envío
            setTimeout(function() {
                // Simulamos éxito (en producción, aquí iría la lógica real de envío)
                const success = Math.random() > 0.2; // 80% de probabilidad de éxito para la demo
                
                if (success) {
                    document.querySelector('.form-success').style.display = 'flex';
                    contactForm.reset();
                } else {
                    document.querySelector('.form-error').style.display = 'flex';
                }
                
                // Restaurar el botón después de unos segundos
                setTimeout(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 3000);
            }, 1500);
        });
    }
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
  document.getElementById(id).style.display = 'block';
  document.body.style.overflow = 'hidden'; // Evita scroll de fondo
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
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
