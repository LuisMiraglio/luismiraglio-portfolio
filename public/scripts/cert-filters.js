// ===============================
// CERTIFICATE FILTER SYSTEM
// Filtra tarjetas por categoría
// ===============================

function initCertFilters() {
  const root = document.querySelector("[data-cert-section]");
  if (!root) return;

  const filterBar = root.querySelector("[data-cert-filters]");
  const grid = root.querySelector("[data-cert-grid]");
  if (!filterBar || !grid) return;

  const buttons = Array.from(filterBar.querySelectorAll("[data-filter]"));
  const cards = Array.from(grid.querySelectorAll("[data-category]"));

  const applyFilter = (value) => {
    cards.forEach((card) => {
      const category = card.getAttribute("data-category");
      const show = value === "all" || category === value;
      card.style.display = show ? "" : "none";
    });

    buttons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.filter === value);
    });
  };

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    applyFilter(btn.dataset.filter);
  });

  // Estado inicial
  applyFilter("all");
}

// Esperar DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCertFilters);
} else {
  initCertFilters();
}