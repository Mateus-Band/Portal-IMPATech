// app/javascript/theme_toggle.js
// Compatível com Turbo (Rails importmap). Responsável por alternar a classe `dark` no <html>.
(function () {
  function applyTheme(isDark) {
    const root = document.documentElement;
    root.classList.toggle("dark", !!isDark);
    const label = document.getElementById("theme-label");
    if (label) label.textContent = isDark ? "🌙 Escuro" : "☀️ Claro";
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  function init() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;

    // Carrega preferência salva (se houver)
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored === "dark" ? true : (stored === "light" ? false : prefersDark);
    applyTheme(initialDark);

    // clique
    btn.addEventListener("click", () => {
      const isNowDark = !document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isNowDark ? "dark" : "light");
      applyTheme(isNowDark);
    });

    // opcional: esc para sair do modo (acessibilidade)
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  }

  // Usar turbo:load quando estiver disponível, fallback para DOMContentLoaded
  if (typeof window !== "undefined") {
    document.addEventListener("turbo:load", init);
    document.addEventListener("DOMContentLoaded", init);
  }
})();
