import "./supabase_config.js";
document.addEventListener("DOMContentLoaded", () => {

  const btnModo = document.getElementById("modoOscuro");
  const root = document.documentElement;
  const icono = btnModo.querySelector("i");
  const texto = document.createElement("span");
  texto.id = "modoTexto";
  texto.style.marginLeft = "0.5rem";

  btnModo.appendChild(texto);

  const actualizarIcono = () => {
    const temaActual = root.getAttribute("data-tema");
    if (temaActual === "oscuro") {
      icono.className = "fa-solid fa-sun";
      texto.textContent = "Modo claro";
      btnModo.title = "Cambiar a modo claro";
    } else {
      icono.className = "fa-solid fa-moon";
      texto.textContent = "Modo oscuro";
      btnModo.title = "Cambiar a modo oscuro";
    }
  };

  // Cargar modo previo desde localStorage
  const modoGuardado = localStorage.getItem("modo-tema");
  if (modoGuardado === "oscuro") {
    root.setAttribute("data-tema", "oscuro");
  }
  actualizarIcono();

  btnModo.addEventListener("click", () => {
    const temaActual = root.getAttribute("data-tema");
    if (temaActual === "oscuro") {
      root.removeAttribute("data-tema");
      localStorage.setItem("modo-tema", "claro");
    } else {
      root.setAttribute("data-tema", "oscuro");
      localStorage.setItem("modo-tema", "oscuro");
    }
    actualizarIcono();
  });
// Botón hamburguesa
  const btnToggle = document.querySelector(".toggle-sidebar");
  const sidebar = document.querySelector("nav");
  const overlay = document.querySelector(".overlay");
  const iconToggle = btnToggle.querySelector("i");

  btnToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    iconToggle.className = sidebar.classList.contains("active")
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });
});

// IntersectionObserver para animaciones reveal
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
