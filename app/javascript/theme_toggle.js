// Sistema de tema claro/escuro para Rails com Turbo
console.log("theme_toggle.js carregado"); // Debug

function applyTheme(isDark) {
  console.log("Aplicando tema:", isDark ? "escuro" : "claro"); // Debug
  
  const root = document.documentElement;
  
  if (isDark) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  
  // Atualizar label do botão
  const label = document.getElementById("theme-label");
  if (label) {
    label.textContent = isDark ? "🌙 Escuro" : "☀️ Claro";
  }
  
  // Atualizar aria-pressed
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }
}

function initThemeToggle() {
  console.log("Inicializando theme toggle"); // Debug
  
  const btn = document.getElementById("theme-toggle");
  
  if (!btn) {
    console.warn("Botão theme-toggle não encontrado!");
    return;
  }
  
  console.log("Botão encontrado:", btn); // Debug
  
  // Obter preferência inicial
  let stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && 
                      window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  let initialDark = false;
  
  if (stored === "dark") {
    initialDark = true;
  } else if (stored === "light") {
    initialDark = false;
  } else {
    initialDark = prefersDark;
  }
  
  console.log("Tema inicial:", initialDark ? "escuro" : "claro"); // Debug
  applyTheme(initialDark);
  
  // Remover listeners antigos (prevenir duplicação)
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  
  // Adicionar listener de clique
  newBtn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Botão clicado!"); // Debug
    
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const willBeDark = !isCurrentlyDark;
    
    console.log("Mudando de", isCurrentlyDark ? "escuro" : "claro", 
                "para", willBeDark ? "escuro" : "claro"); // Debug
    
    localStorage.setItem("theme", willBeDark ? "dark" : "light");
    applyTheme(willBeDark);
  });
  
  // Acessibilidade
  newBtn.addEventListener("keydown", function(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      newBtn.click();
    }
  });
  
  console.log("Theme toggle inicializado com sucesso!"); // Debug
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  initThemeToggle();
}

// Reinicializar após navegação Turbo
document.addEventListener("turbo:load", initThemeToggle);
document.addEventListener("turbo:render", initThemeToggle);