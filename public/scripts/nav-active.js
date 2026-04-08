const nav = document.querySelector('.navbar');
const links = Array.from(document.querySelectorAll('.nav-link'));
const sectionLinks = links
  .map((link) => {
    const href = link.getAttribute('href') || '';
    if (!href.startsWith('#')) return null;

    const section = document.querySelector(href);
    if (!section) return null;

    return { link, section };
  })
  .filter(Boolean);

const setActive = (sectionId) => {
  links.forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('is-active', href === `#${sectionId}`);
    link.setAttribute('aria-current', href === `#${sectionId}` ? 'location' : 'false');
  });
};

const updateFromScroll = () => {
  if (sectionLinks.length === 0) return;

  const anchorLine = window.innerHeight * 0.24;
  let activeId = sectionLinks[0].section.id;
  let minDistance = Infinity;

  sectionLinks.forEach(({ section }) => {
    const rect = section.getBoundingClientRect();
    const isInViewport = rect.bottom > anchorLine && rect.top < window.innerHeight * 0.72;
    const distance = Math.abs(rect.top - anchorLine);

    if ((isInViewport && distance < minDistance) || (minDistance === Infinity && distance < minDistance)) {
      minDistance = distance;
      activeId = section.id;
    }
  });

  if (activeId) setActive(activeId);
};

const updateFromHash = () => {
  const hashId = window.location.hash.replace('#', '');
  if (!hashId) return;

  const hasSection = sectionLinks.some(({ section }) => section.id === hashId);
  if (hasSection) setActive(hashId);
};

const updateScrolled = () => {
  nav?.classList.toggle('scrolled', window.scrollY > 18);
};

links.forEach((link) => {
  link.addEventListener('click', () => {
    const href = link.getAttribute('href') || '';
    if (!href.startsWith('#')) return;

    const id = href.slice(1);
    setActive(id);
  });
});

let ticking = false;
window.addEventListener(
  'scroll',
  () => {
    updateScrolled();

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateFromScroll();
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true }
);

window.addEventListener('hashchange', updateFromHash);
window.addEventListener('load', () => {
  updateScrolled();
  updateFromHash();
  updateFromScroll();
});

updateScrolled();
updateFromHash();
updateFromScroll();
