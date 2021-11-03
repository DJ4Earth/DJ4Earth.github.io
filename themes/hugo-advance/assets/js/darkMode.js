const darkModeContainer = document.getElementById('dark-mode-container');
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');

if (darkModeCheckbox) {
    darkModeCheckbox.addEventListener('change', () => {
        darkModeContainer.classList.add("animated")
        toggleDarkMode();
    });
}

function toggleDarkMode() {
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
        document.documentElement.setAttribute('data-mode', "light");
        localStorage.setItem("darkMode", false);
        darkModeCheckbox.checked = false;
    } else {
        document.documentElement.setAttribute('data-mode', 'dark');
        localStorage.setItem("darkMode", true);
        darkModeCheckbox.checked = true;
    }
}

function initDarkMode() {
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
        darkModeCheckbox.checked = true;
        return;
    }
    if (darkMode === "false") {
        darkModeCheckbox.checked = false;
        return;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-mode', 'dark');
        darkModeCheckbox.checked = true;
    }
}

initDarkMode();
