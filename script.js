const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

function setTheme(theme) {
    root.dataset.theme = theme;

    if (!themeToggle) {
        return;
    }

    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    themeToggle.querySelector(".theme-toggle__icon").textContent = isDark ? "☀" : "☾";
    themeToggle.querySelector(".theme-toggle__text").textContent = isDark
        ? "Light mode"
        : "Dark mode";
}

const savedTheme = localStorage.getItem("mos-mojo-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

setTheme(savedTheme || preferredTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        localStorage.setItem("mos-mojo-theme", nextTheme);
        setTheme(nextTheme);
    });
}
