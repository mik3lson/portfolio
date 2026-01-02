const menu = document.querySelector(".menu");
const trigger = document.querySelector(".menu-trigger");
const themeToggler = document.querySelector(".theme-toggler");

trigger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Theme toggler functionality
const THEME_KEY = "portfolio-theme";

// Initialize theme on page load
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
}

// Toggle theme on button click
if (themeToggler) {
    themeToggler.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        document.body.classList.toggle("dark-theme");
        localStorage.setItem(THEME_KEY, newTheme);
    });
}

// Initialize theme when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
} else {
    initTheme();
}
