// Check for and apply the user's saved theme preference from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
    
    const toggleButton = document.getElementById("toggle-mode");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleTheme);
    }
});

// Function to toggle between light and dark mode
function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
    const newTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";

    // Remove the current theme and apply the new theme
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    // Save the user's theme preference in localStorage
    localStorage.setItem("theme", newTheme);
}