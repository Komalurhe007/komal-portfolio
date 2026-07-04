// Select the button
const themeToggle = document.getElementById("theme-toggle");

// Toggle Dark & Light Mode
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // Change the icon
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

});
