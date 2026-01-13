document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') {
    console.warn('[GSAP] GSAP no está disponible.');
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const heroTimeline = gsap.timeline({ defaults: { duration: 0.8, ease: 'power2.out' } });
  heroTimeline
    .from('.hero-greeting', { y: 16, opacity: 0 })
    .from('.hero-title', { y: 18, opacity: 0 }, '-=0.5')
    .from('.hero-subtitle', { y: 18, opacity: 0 }, '-=0.5')
    .from('.title-bar', { scaleX: 0, transformOrigin: 'left center', opacity: 0 }, '-=0.5')
    .from('.hero-bullets li', { y: 16, opacity: 0, stagger: 0.08 }, '-=0.4')
    .from('.hero-buttons .btn', { y: 14, opacity: 0, stagger: 0.12 }, '-=0.35')
    .from('.hero-image .profile-card', { y: 20, opacity: 0 }, '-=0.6');

  if (typeof ScrollTrigger === 'undefined') {
    return;
  }

  gsap.utils.toArray('.section-title, .about-highlight').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  gsap.utils.toArray('.about-box').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 24,
      duration: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  gsap.utils.toArray('.service-block').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 18,
      duration: 0.65,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 82%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  const gridSelectors = [
    '.projects-grid .project-card',
    '.services-grid .service-card',
    '.certificates-grid .certificate-card',
    '.skills-grid .skill-category'
  ];

  gridSelectors.forEach((selector) => {
    gsap.utils.toArray(selector).forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 22,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  });

  gsap.from('.contact-content > *', {
    opacity: 0,
    y: 18,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 82%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.from('.services-action, .cv-card', {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.services-action, .cv-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });
});
