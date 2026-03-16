const nav = document.querySelector(".navbar");
const links = Array.from(document.querySelectorAll(".nav-link"));
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const setActive = (id) => {
  links.forEach((a) => {
    a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
  });
};

if (sections.length > 0) {
  const obs = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) setActive(visible.target.id);
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.2, 0.4, 0.6] }
  );

  sections.forEach((s) => obs.observe(s));
}

const updateScrolled = () => {
  nav?.classList.toggle("scrolled", window.scrollY > 18);
};

updateScrolled();
window.addEventListener("scroll", updateScrolled, { passive: true });
