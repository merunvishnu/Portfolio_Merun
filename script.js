// script.js

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

// Toggle dark mode and save preference
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
}
