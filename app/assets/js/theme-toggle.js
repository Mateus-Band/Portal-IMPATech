document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle');
    const label = document.getElementById('theme-label');
    
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
        if (label) label.textContent = '🌙 Escuro';
    }
    
    if (toggle) {
        toggle.addEventListener('click', function() {
            const isDark = document.documentElement.classList.toggle('dark');
            
            if (isDark) {
                localStorage.theme = 'dark';
                if (label) label.textContent = '🌙 Escuro';
            } else {
                localStorage.theme = 'light';
                if (label) label.textContent = '☀️ Claro';
            }
        });
    }
});