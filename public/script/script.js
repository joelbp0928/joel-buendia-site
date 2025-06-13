document.addEventListener("DOMContentLoaded", () => {
  const btnModo = document.getElementById("modoOscuro");
  const root = document.documentElement;

  // Cargar modo previo desde localStorage
  const modoGuardado = localStorage.getItem("modo-tema");
  if (modoGuardado === "oscuro") {
    root.setAttribute("data-tema", "oscuro");
  }

  btnModo.addEventListener("click", () => {
    const temaActual = root.getAttribute("data-tema");
    if (temaActual === "oscuro") {
      root.removeAttribute("data-tema");
      localStorage.setItem("modo-tema", "claro");
    } else {
      root.setAttribute("data-tema", "oscuro");
      localStorage.setItem("modo-tema", "oscuro");
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(el => observer.observe(el));