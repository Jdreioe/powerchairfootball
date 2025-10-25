const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeText = document.getElementById('theme-text');
const html = document.documentElement;

function initTheme() {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

function setTheme(theme) {
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Lys';
        themeToggle.setAttribute('aria-pressed', 'true');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Mørk';
        themeToggle.setAttribute('aria-pressed', 'false');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    setTheme(newTheme);
});

function updateGreeting() {
    const hour = new Date().getHours();
    const greetingEl = document.getElementById('greeting');
    let greeting;
    
    if (hour < 6) greeting = 'God nat';
    else if (hour < 10) greeting = 'God morgen';
    else if (hour < 18) greeting = 'God dag';
    else greeting = 'God aften';
    
    greetingEl.textContent = greeting;
}

initTheme();
updateGreeting();
